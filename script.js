function fetchDetails() {
    const pincode = document.getElementById("pincode").value;
    fetch(`https://api.postalpincode.in/pincode/${pincode}`)
          .then(response => response.json())
          .then(data => {
    const resultDiv = document.getElementById("result");
    if (data[0].Status === "Success") {
    const postOffice = data[0].PostOffice.map((postOffice) => {
      return `<div id="resultcard">
     <h3 class="title"> Pincode Details: ${pincode}</h3><hr>
     <h4 class="cityname"> ${postOffice.Name}</h4><br>
     <p class="Details"> Branch Type : ${postOffice.BranchType}</p><br>
     <p class="Details"> District : ${postOffice.District}</p><br>
     <p class="Details"> Block : ${postOffice.Block}</p><br>
     <p class="Details"> Region : ${postOffice.Region}</p><br>
     <p class="Details"> State : ${postOffice.State}</p><br>
     <p class="Details"> Country : ${postOffice.Country}</p><br>
      </div>`
    })
    
    resultDiv.innerHTML = postOffice.join("");
    } 
    else {
     resultDiv.innerHTML = `<p class="Error"> No Details Found for ${pincode}.</p>`;
    }
    resultDiv.style.display = "block";
    }).catch(error => console.error(error));
    }

/////////////////////////////////////////////////////////////////
    
