class Lightning{
    constructor(){
        this.img1 = loadImage("image/thund1.png");
        this.img2 = loadImage("image/thund2.png");
        this.img3 = loadImage("image/thund3.png");
        this.img4 = loadImage("image/thund4.png");

        this.img1.resize(100, 175);
        this.img2.resize(100, 175);
        //this.img3.resize(100, 175);
        this.img1.resize(85, 148);

        this.rand = Math.round(random(1,4));
        //console.log(this.rand);

        //this.img = loadImage("image/thund"+this.rand+".png");

        this.visibility = 255;
    }
    display(){
        this.visibility = this.visibility - 5;

        switch(this.rand){
            case 1:
                push();
                console.log("case1");
                tint(255,this.visiblity);
                image(this.img1, 150,40);
                pop();
                break;
            case 2:
                push();
                console.log("case2");
                tint(255,this.visiblity);
                image(this.img2, 200,40);
                pop();
                break;
            case 3:
                push();
                console.log("case3");
                tint(255,this.visiblity);
                image(this.img3, 20,40);
                pop();
                break;
            case 4:
                push();
                console.log("case4");
                tint(255,this.visiblity);
                image(this.img4, 150,40);
                pop();
                break;
                
        //console.log(this.visibility);
        }
  }
}