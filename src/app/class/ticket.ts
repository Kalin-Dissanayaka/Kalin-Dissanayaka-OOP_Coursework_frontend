export class ticket{
      ticketId: number;
      customerName: string;
      ticketQuantity: number;
      customerRetrievalInterval: number;

      constructor(){
        this.ticketId = 0;
        this.customerName = "";
        this.ticketQuantity = 0;
        this.customerRetrievalInterval = 0; 
      }
}