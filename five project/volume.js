class volumess{
constructor(){
   
    this.pathss = document.getElementById("audo_path");
    this.pathss.volume =2/100;
  
    var volume_ranges = document.getElementById("volume_ranges");


    volume_ranges.addEventListener("change", () => {
      
         this.pathss.volume = volume_ranges.value / 100;
         
    });
    this.volume_speed=document.getElementById("volume_speed");
    
    this.pathss.playbackRate=1;
    volume_speed.addEventListener("change",()=>{
        this.pathss.playbackRate=this.volume_speed.value/100
    

    });
}
    
}
onload = new volumess();