console.log("Merging to Arrays");
let Array1=[
    {"id":"01","name":"Ali","email":"aali@hotmail.com","phone":"+1607051687602"},
    {"id":"02","name":"phahameda","email":"khana.phahameda@sikadara.com","phone":"+5664458556151"},
    {"id":"03","name":"Karima","email":"ali.karima@sekha.net","phone":"+4101480081109"},
    {"id":"04","name":"Ehtesanima","email":"etasanima@tasanima.net","phone":"+5526893100534"},
    {"id":"05","name":"Tabasasuma","email":"jarina95@tabasasuma.net","phone":"+6380543929762"},
    {"id":"06","name":"Rahima","email":"rahima72@khana.com","phone":"+2581179203154"},
    {"id":"07","name":"SekhaKhan","email":"ananta.khana@sekha.biz","phone":"+1601282527101"},
    {"id":"08","name":"Mehana","email":"khana.mehanaja@sekha.biz","phone":"+8086211733958"},
    {"id":"09","name":"Phahamedy","email":"tasanima.phahameda@yahoo.com","phone":"+8349709979036"},
    {"id":"10","name":"Nushrat","email":"nsekha@hotmail.com","phone":"+5976046554970"},


];  Array1.forEach(element=>{
    let head=document.createElement("tr");
        
    let ele1=document.createElement("td");
    ele1.innerText=element["id"];
    
    let ele2=document.createElement("td");
    ele2.innerText=element["name"];

    let ele3=document.createElement("td");
    ele3.innerText=element["phone"];

    let ele4=document.createElement("td");
    ele4.innerText=element["email"];




    head.append(ele1,ele2,ele3,ele4);
    
    document.querySelector(".ary1").append(head);

});


let Array2=[
    


    {"id":"001","name":"Ali","email":"aali@hotmail.com","phone":"+1607051687602"},
    {"id":"002","name":"hold","email":"khana.phahameda@sikadara.com","phone":"+5664458556151"},
    {"id":"003","name":"Karoma","email":"ali.karima@sekha.net","phone":"+4101480081109"},
    {"id":"004","name":"Etsanima","email":"etasanima@tasanima.net","phone":"+5526893100534"},
    {"id":"005","name":"suma","email":"jarina95@tabasasuma.net","phone":"+6380543929762"},
    {"id":"006","name":"Rahima","email":"rahima72@khana.com","phone":"+2581179203154"},
    {"id":"007","name":"kahnKhan","email":"ananta.khana@sekha.biz","phone":"+1601282527101"},
    {"id":"008","name":"Mehana","email":"khana.mehanaja@sekha.biz","phone":"+8086211733958"},
    {"id":"009","name":"Phahamedy","email":"tasanima.phahameda@yahoo.com","phone":"+8349709979036"},
    {"id":"010","name":"Nushrat","email":"nsekha@hotmail.com","phone":"+5976046554970"},
   
];
Array2.forEach(element=>{
    let head=document.createElement("tr");
        
    let ele1=document.createElement("td");
    ele1.innerText=element["id"];
    
    let ele2=document.createElement("td");
    ele2.innerText=element["name"];

    let ele3=document.createElement("td");
    ele3.innerText=element["phone"];

    let ele4=document.createElement("td");
    ele4.innerText=element["email"];




    head.append(ele1,ele2,ele3,ele4);
    
    document.querySelector(".ary2").append(head);

});

let Array3=Array1.concat(Array2);
function removeDuplctAndMerge(Array3){
    for (let index = 0; index < Array3.length; index++) {
        for (let index2 =index+1; index2 < Array3.length; index2++) {
            
            if (Array3[index]["name"]===Array3[index2]["name"]) {
                Array3.splice(index2,1);
             }
            }
    }
    return Array3;
}
console.log(removeDuplctAndMerge(Array3));
Array3.forEach(element=>{
    let head=document.createElement("tr");
        
    let ele1=document.createElement("td");
    ele1.innerText=element["id"];
    
    let ele2=document.createElement("td");
    ele2.innerText=element["name"];

    let ele3=document.createElement("td");
    ele3.innerText=element["phone"];

    let ele4=document.createElement("td");
    ele4.innerText=element["email"];




    head.append(ele1,ele2,ele3,ele4);
    
    document.querySelector(".ary3").append(head);

});





