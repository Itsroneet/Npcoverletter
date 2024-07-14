const Toast = Swal.mixin({
  toast: true,
  position: "bottom-start",
  showConfirmButton: false,
  timer: 3000,
  timerProgressBar: true,
  didOpen: (toast) => {
    toast.onmouseenter = Swal.stopTimer;
    toast.onmouseleave = Swal.resumeTimer;
  }
});


function generateCoverLetter() {
  const name = document.getElementById("name").value;
  const address = document.getElementById("address").value;
  const domain = document.getElementById("domain").value;
  const date = new Date().toLocaleDateString();

  const coverLetter = `

<b class="date">Date : ${date}</b>

To,

The Hostmaster,

Mercantile Communication Pvt. Ltd.

Durbar Marg,Kathmandu

<b class="sub"> subject: NP Domain Registrahtion </b>

Dear Sir/Madam,

I am writing this letter to request you to kindly register a <b>${domain}</b> domain for me based on my name. I have provided my personal details, and also attached a scanned copy of my citizenship with this letter.I would be very glad if you approve my domain registration request.

Thank you very much for consideration. I look forward to hearing from you soon.

Domain name: ${domain}

Sincerely,

Name: ${name}

Address: ${address}


`;



  if (name === "") {
    Toast.fire({
      icon: "error",
      title: "Name cannot Be Empty !!"
    });
    
  } 
  else if (address === "") {
    Toast.fire({
      icon: "error",
      title: "Address cannot Be Empty !!"
    });
  }
  else if (domain.length < 3) {
    Toast.fire({
      icon: "error",
      title: "Domin should be more than 5 character!"
    });
  }
    else {
    document.getElementById("output").innerHTML = coverLetter;
    document.getElementById("download-btn").style.display = "block";
    Toast.fire({
      icon: "success",
      title: "Cover letter Generated Successfully"
    });
  }
}


function downloadAsImage() {
  event.preventDefault()


  const outputContainer = document.getElementById("output-container");
  html2canvas(outputContainer).then((canvas) => {
    const link = document.createElement("a");
    link.download = "cover_letter_ronitbhandari.com.np.jpg";
    link.href = canvas.toDataURL("image/jpeg");
    link.click();
  });

  Toast.fire({
    icon: "success",
    title: "Successfully Downloaded"
  });
}
