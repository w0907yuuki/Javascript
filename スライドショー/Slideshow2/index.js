const img_src = ["Aoshima.jpg", "ChickenNanban.jpg", "Chi-zumanju.jpg","Furo-ranteMiyazaki"];
      let num = -1;
 
      function slide_time() {
        if (num === 2) {
          num = 0;
        } else {
          num++;
        }
        document.getElementById("slide_img").src = img_src[num];
      }
 
      setInterval(slide_time, 1500);