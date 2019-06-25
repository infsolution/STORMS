import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
showChats(){
  document.getElementById("myChat").style.display="block";
  document.getElementById("btChat").style.display="none";
}
hidesChat(){
  document.getElementById("myChat").style.display="none";
  document.getElementById("btChat").style.display="block";
  }

  sendMessage(){
    var conversa = document.getElementById("message").innerText.valueOf;
    document.getElementById("conversa").innerHTML = document.getElementById("conversa").innerHTML+conversa+"<br/>";
  }
}
