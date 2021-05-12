import { Component, OnInit } from '@angular/core';
import { Chart, registerables } from 'chart.js'
import { DashboardService } from 'src/app/services/dashboard-service';
Chart.register(...registerables);

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  dataCards = {
      vendas: 0,
      clientes: 0,
      devolucoes: 0,
      lucro: 'R$ 0',
  }

  constructor(
    private dashboardService: DashboardService
  ) { }

  ngOnInit(): void {
    this.getDataCards()
    this.getSalesGraph()
    this.getClientGraph()
  }

  getDataCards() {
    this.dashboardService.getDataCharts().subscribe( (data : any)=> {
      this.dataCards = data
    })
  }

  getSalesGraph() {
    this.dashboardService.getSalesGraph().subscribe( (data : any)=> {
      this.setSalesGraph(data)
    })
  }

  getClientGraph() {
    this.dashboardService.getClientGraph().subscribe( (data : any)=> {
      this.setClientGraph(data)
    })
  }

  setSalesGraph(data: any) {
    var ctxVendas : any = document.getElementById('chartVendas');
    var myChartVendas = new Chart(ctxVendas.getContext('2d'), {
      type: 'bar',
      data: {
        labels: data.map((e: any) => e.label),
        datasets: [{
          data: data.map((e: any) => e.value),
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(255, 159, 64, 0.2)'
          ],
          borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)'
          ],
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        },
      }
    });
  }

  setClientGraph(data: any) {
    var ctxClient : any = document.getElementById('chartClientes');
    var myChartClient = new Chart(ctxClient.getContext('2d'), {
      type: 'line',
      data: {
        labels: data.map((e: any) => e.label),
        datasets: [{
          label: 'My First Dataset',
          data: data.map((e: any) => e.value),
          fill: false,
          borderColor: 'rgb(75, 192, 192)',
          tension: 0.1
        }]
      }
    });
  }

}
