class play {
    constructor() {
        var main_height = document.getElementById("player")
        main_height.style.height = screen.height + "px";

        if (screen.width < 500) {
            main_height.style.width = screen.width + "px";

        }
        var heightdevice = document.getElementById("content");
        heightdevice.style.height = screen.height - 300 + "px";
    }

}


class audio_player {
    constructor() {
        this.next = document.getElementById("back");
        this.back = document.getElementById("next");
        this.audio_path = document.getElementById("audo_path");
        this.radio_title = document.getElementById("radio_title");
        this.play_pause_btn = document.getElementById("play-pause");
        this.play_pause_btn.addEventListener("click", () => {
            this.play_pause();
        });
        this.names_radio = [];
        this.names_radio[0] = "راديو سوا الاردن";
        this.names_radio[1] = "إذاعة لبنان الحر - ذوق مصبح، لبنان";
        this.names_radio[2] = "بيروت";

        this.source_path = [];
        this.source_path[0] = "http://mbn-channel-06.akacast.akamaistream.net/7/28/233455/v1/ibb.akacast.akamaistream.net/mbn_channel_06";
        this.source_path[1] = "https://edge.mixlr.com/channel/qtqeb";
        this.source_path[2] = "https://edge.mixlr.com/channel/qtqeb";
        this.server = 0;
        this.setSource();
        this.next.addEventListener("click", () => {

            this.next_methode();
        }
        );

        this.back.addEventListener("click", () => {
            this.back_methode();
        }
        );

    }

    next_methode() {
        if (this.server < this.source_path.length - 1) {
            ++this.server;
            this.isPlayed = false;
        }
        localStorage.setItem("save",this.server);
        this.setSource();
    }
    back_methode() {
        if (this.server > 0) {
            --this.server;
            this.isPlayed = false;
        }
        else {
            this.server = this.source_path.length - 1;
        }
        localStorage.setItem("save",this.server);
        this.setSource();
    }
    setSource() {
        if(localStorage.getItem("save")!=null){
            this.server=localStorage.getItem("save");

        }
        this.audio_path.src = this.source_path[this.server];
        this.radio_title.innerHTML = this.names_radio[this.server];
        this.play_pause();
    }
    play_pause() {
        if (this.isPlayed == false) {
            this.play_pause_btn.src = "./image/pause.png";
            this.audio_path.play();
            this.isPlayed = true;
        }
        else {
            this.audio_path.pause();
            this.isPlayed = false;
            this.play_pause_btn.src = "./image/play.png";

        }
    }
}
onload = () => {
    new play();
    new audio_player();


}