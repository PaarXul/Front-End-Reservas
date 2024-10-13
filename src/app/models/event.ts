export class AppEvent {
    id: number;
    name: string;
    location: string;
    date: string;

    constructor() {
        this.id = 0;  // Puedes darle un valor por defecto si lo necesitas
        this.name = '';
        this.location = '';
        this.date = '';
    }
}
