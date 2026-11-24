const message = `Halo cantiku, sayangku duniaku.\nsedang sedih ya? pantes disini hujan ternyata cantiku lagi ga baik baik ajas.\n\ntapi aku tau kamu udah hebat bisa ngadepin orang gitu. terimakasih ya udah jadi anak baik. Kalau hari kamu buruk kamu harus selalu "inget" \n\nI if you are having a bad day, remember is just a bad day not a bad life\n\nAnyway, I hope you're doing okay, karena akan selalu ada aku yang menunggu ceritamu.`;

function showLetter() {
  document.getElementById("introText").style.opacity = 0;
  document.querySelector(".btn").style.display = "none";

  setTimeout(() => {
    const letterBox = document.getElementById("letterBox");
    const typedText = document.getElementById("typedText");
    letterBox.style.display = "block";
    let i = 0;

    function typeWriter() {
      if (i < message.length) {
        typedText.innerHTML += message.charAt(i);
        i++;
        setTimeout(typeWriter, 30);
      }
    }

    typeWriter();
  }, 600);
}
