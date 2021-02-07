import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
allowNewServer = false;
createNewServer:String = "Server Has not Created";
serverName="Xeon";
ServerCreated=false;
  constructor() { 

    setTimeout(()=>{
      this.allowNewServer = true
      },2000);

  }

  onClickServer(){
    this.ServerCreated=true;
    this.createNewServer="Server Created"+this.serverName;
  }
  onUpdateServer(event:Event){
  this.serverName=(<HTMLInputElement>event.target).value;
  }



  ngOnInit(): void {
  }

  myName:String = 'Mohan';

 checkName(){
  
  return this.myName;

 }
}
