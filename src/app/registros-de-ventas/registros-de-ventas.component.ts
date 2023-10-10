import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-registros-de-ventas',
  templateUrl: './registros-de-ventas.component.html',
  styleUrls: ['./registros-de-ventas.component.css']
})
export class RegistrosDeVentasComponent implements OnInit{
  data = [
    { id: 1, producto: 'Tarjeta Gráfica', status: 'Pagado', monto_pago: 1500, monto: 4 },
    { id: 2, producto: 'Procesador', status: 'Pendiente', monto_pago: 1200, monto: 3 },
    { id: 3, producto: 'Memoria RAM', status: 'Pagado', monto_pago: 200, monto: 8 },
    { id: 4, producto: 'Disco Duro', status: 'Enviado', monto_pago: 300, monto: 2 },
    { id: 5, producto: 'Monitor', status: 'Pendiente', monto_pago: 400, monto: 5 },
    { id: 6, producto: 'Teclado', status: 'Pagado', monto_pago: 100, monto: 10 },
    { id: 7, producto: 'Ratón', status: 'Enviado', monto_pago: 50, monto: 15 },
    { id: 8, producto: 'Fuente de Poder', status: 'Pendiente', monto_pago: 180, monto: 3 },
    { id: 9, producto: 'Gabinete', status: 'Pagado', monto_pago: 250, monto: 2 },
    { id: 10, producto: 'Tarjeta Madre', status: 'Enviado', monto_pago: 350, monto: 1 },
    { id: 11, producto: 'Enfriador CPU', status: 'Pendiente', monto_pago: 80, monto: 4 },
    { id: 12, producto: 'SSD', status: 'Pagado', monto_pago: 200, monto: 6 },
    { id: 13, producto: 'Tarjeta de Sonido', status: 'Enviado', monto_pago: 150, monto: 2 },
    { id: 14, producto: 'Tarjeta de Red', status: 'Pendiente', monto_pago: 50, monto: 5 },
    { id: 15, producto: 'Cámara Web', status: 'Pagado', monto_pago: 70, monto: 7 },
    { id: 16, producto: 'Micrófono', status: 'Enviado', monto_pago: 120, monto: 3 },
    { id: 17, producto: 'Altavoces', status: 'Pendiente', monto_pago: 200, monto: 4 },
    { id: 18, producto: 'Auriculares', status: 'Pagado', monto_pago: 100, monto: 8 },
    { id: 19, producto: 'Router', status: 'Enviado', monto_pago: 75, monto: 2 },
    { id: 20, producto: 'Switch', status: 'Pendiente', monto_pago: 60, monto: 3 }
  ];

  searchText = '';
  currentPage = 1;
  itemsPerPage = 10;

  constructor() {}

  ngOnInit(): void { }

  get paginatedData() {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    const endIndex = this.currentPage * this.itemsPerPage;
    return this.data.slice(startIndex, endIndex);
  }

  nextPage() {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
    }
  }

  previousPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
    }
  }

  get totalPages() {
    return Math.ceil(this.data.length / this.itemsPerPage);
  }

}
