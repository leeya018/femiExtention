// replaceText(document.body)

// function replaceText(element) {
//   if (element.hasChildNodes()) {
//     element.childNodes.forEach(replaceText)
//   } else if (element.nodeType === Text.TEXT_NODE) {
//     if (element.textContent.match(/coronavirus/gi)) {
//       const newElement = document.createElement('span')
//       newElement.innerHTML = element.textContent.replace(/(coronavirus)/gi, '<span class="rainbow">$1</span>')
//       element.replaceWith(newElement)
//     }
//   }
// }




let findDataBtn
if (document.getElementsByClassName("lable-HfOfGy font-class-2").length) {
  findDataBtn = document.getElementsByClassName("lable-HfOfGy font-class-2")[0].childNodes[0]
  findDataBtn.addEventListener("click", startActions);
}



function checkValueIsChanged(resolveFunc,item){
  console.log(`item`, item)
  if(document.getElementById("tubeBarcode").value !=="" ){
    resolveFunc()
  }
}
async function wait3Page() {

  return new Promise(resolve => {
    
    setTimeout(() => {
      let scanInput = document.getElementById("tubeBarcode")
      scanInput.addEventListener("change",function(){
        let item = "ntrentiesr"
        checkValueIsChanged(resolve,item)
      }
      )
      if (document.getElementById("reason") !== null) {
        document.getElementById("reason").children[2].children[0].click()
        document.getElementById("otherReasonNotes").focus()
        document.getElementById("otherReasonNotes").value = "אחר"
        document.getElementById("otherReasonNotes").classList.add("focus-visible");
        setTimeout(() => {
         
          console.log("You need to click the button" )
          document.getElementsByClassName("form-group barcode")[0].querySelector(".scan-btn").click()
        }, 2000);

        resolve()
      }
    }, 2000);
  });
}
async function wait2Page() {
  return new Promise(resolve => {
    setTimeout(() => {
      if (document.getElementsByClassName("bg-o9ZLOR border-class-1")[0].value !== "בחר") {
        document.getElementsByClassName("title-sYkMBj font-class-2")[0].click()
        resolve()
      }
    }, 2000);
  });
}

async function wait1Page() {
  return new Promise(resolve => {
    setTimeout(() => {
      if (document.getElementById("HCS").value !== "בחר") {
        document.getElementsByClassName("title-sYkMBj font-class-2")[0].click()
        resolve()
      }
    }, 2000);
  });
}


async function startActions() {
  console.log("element")

  console.log("element")
  alert("tr")
  await wait1Page()
  await wait2Page();
  await wait3Page()
  document.getElementById("CoolerBarcode").value = "09090909090"
  document.getElementById("poolingSampleBarcode").value = "121212121"

}


