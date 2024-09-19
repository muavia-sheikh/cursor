      let imagediv = document.querySelector("#image");
      let cursor = document.querySelector("#cursor");
      window.addEventListener(`mousemove`, function (dets) {
        console.log(dets);

        gsap.to(cursor, {
          x: dets.x,
          y: dets.y,
          duration: 0.6,
        });
      });

      imagediv.addEventListener("mouseenter", function () {
        cursor.innerHTML= "View More"
        gsap.to(cursor, {
          scale: 5,
          backgroundColor:"#fff"
        });
      });
      imagediv.addEventListener("mouseleave", function () {
        cursor.innerHTML= ""

        gsap.to(cursor, {
          scale: 1,
          backgroundColor:"#000"
        });
      });
