 let Random_number = Math.floor(Math.random() * 21);
 let message = document.querySelector(".message");
 let body = document.querySelector("body");
 let input;
 let questionMark = document.querySelector(".questionMark");
 let again = document.querySelector(".again");
 let score = document.querySelector(".score");
 let total = 20;
 let highscore = Number(document.querySelector(".highscore").textContent);
 highscore.value = 1;
 let generalDiv = 0;
 let label_highscore = document.querySelector(".label-highscore");

 document.querySelector(".check").addEventListener("click", function () {
     input = Number(document.querySelector(".guess").value);
     $.ajax({
         url: "/Home/GuessMyNumber", // HomeController'daki SaveData eylemine gönderme yapacak
                method: "POST",
                data: { input: input }, // Kaydedilecek sayıyı POST verisi olarak gönderiyoruz
                success: function (response) {
                    console.log("Kaydedildi!");
                },
                error: function (xhr, status, error) {
                    console.log("Hata:", error);
                },
            });

   if (!input) {
     message.textContent = "💔 Boş Değer Girdiniz.";
     body.style.backgroundColor = "blue";
   } else if (input > Random_number) {
     message.textContent = "Daha düşük bir sayı girin.";
     body.style.backgroundColor = "#222";
     --total;
     score.textContent = total;
   } else if (input < Random_number) {
     message.textContent = "Daha yüksek bir sayı girin.";
     body.style.backgroundColor = "#222";
     --total;
     score.textContent = total;
   } else {
     message.textContent = "✨Tebrikler! Doğru tahmin!";
     questionMark.textContent = Random_number;
     body.style.backgroundColor = "green";

     if (highscore <= total) {
       highscore = total;
       label_highscore.textContent = " 🥇 Highscore:" + highscore;
     }
   }
   document.querySelector(".guess").value = "";
   generalDiv = highscore;
 });

 again.addEventListener("click", function () {
   Random_number = Math.floor(Math.random() * 21);
   body.style.backgroundColor = "#222";
   questionMark.textContent = "?";
   message.textContent = "Start guessing...";
   total = 20;
   score.textContent = total;
   document.querySelector(".guess").value = "";
 });



