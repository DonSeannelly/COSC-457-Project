import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map'
import {serviceInterface} from '../services/serviceInterface';
import {Equipment} from "../models/Equipment";

@Injectable()
export class EquipmentService implements serviceInterface {
    constructor(private http: Http) {
    }
     get() {
        var result = [];
        var count = 0;
        this.http.get('/api/equipment')
            .map(res => res.json()).subscribe(response => {
            for (let temp of response) {
                result[count] = {equipmentID: temp[0].value, venueID: temp[1].value, condition: temp[2].value,
                    type: temp[3].value, model: temp[4].value};
                count++;
            }
        });
        return result;
    }
    getVenueEquipment(id) {
        var result = [];
        var count = 0;
        this.http.get('/api/equipment/venue/' + id)
            .map(res => res.json()).subscribe(response => {
            for (let temp of response) {
                result[count] = {equipmentID: temp[0].value, venueID: temp[1].value, condition: temp[2].value,
                    type: temp[3].value, model: temp[4].value};
                count++;
            }
        });
        return result;
    }
    create(record: Equipment) {
        return this.http.post('/api/equipment', this.mapToSchema(record))
            .map(res => res.json());
    }
    remove(id) {
        return this.http.delete('/api/equipment/' + id)
            .map(res => res.json());
    }
    update(record: Equipment) {
        return this.http.put('/api/equipment', this.mapToSchema(record))
            .map(res => res.json());
    }
    mapToSchema(record: Equipment) {
      return {
        Eqp_ID: record.equipmentID,
        Ven_ID: record.venueID,
        Condition: record.condition,
        Type: record.type,
        Model: record.model
      }
    }
}
