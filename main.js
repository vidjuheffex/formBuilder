var formData = [
  {
    "type": "text",
    "label": "First Name",
    "id": "user-first-name",
    "icon": "fa-user",
    "options": []
  },
  {
    "type": "text",
    "label": "Last Name",
    "id": "user-last-name",
    "icon": "fa-user",
    "options": []
  },
  {
    "type": "email",
    "label": "Email Address",
    "id": "user-email",
    "icon": "fa-envelope",
    "options": []
  },
  {
    "type": "text",
    "label": "Current website url",
    "id": "user-website",
    "icon": "fa-globe",
    "options": []
  },
  {
    "type": "select",
    "label": "Select Language",
    "id": "user-language",
    "icon": "",
    "options": [
      {
        "label": "English",
        "value": "EN"
      },
      {
        "label": "French",
        "value": "FR"
      },
      {
        "label": "Spanish",
        "value": "SP"
      },
      {
        "label": "Chinese",
        "value": "CH"
      },
      {
        "label": "Japanese",
        "value": "JP"
      }
    ]
  },
  {
    "type": "textarea",
    "label": "Your Comment",
    "id": "user-comment",
    "icon": "fa-comments",
    "options": []
  },
  {
    "type": "tel",
    "label": "Mobile Number",
    "id": "user-mobile",
    "icon": "fa-mobile-phone",
    "options": []
  },
  {
    "type": "tel",
    "label": "Home Number",
    "id": "user-phone",
    "icon": "fa-phone",
    "options": []
  }
];


function buildForm(){
    var formInputsWrapper = document.querySelector("#formInputsWrapper");
    
    formData.forEach(function(element, index, array){
        //create form wrapper
        var elementWrapper = document.createElement("div");
        elementWrapper.classList.add("inputContainer")

        //create form elements
        var newElement;
        if (element.type === "textarea"){
            newElement = document.createElement("textarea");
        }
        else if (element.type === "select"){
            newElement = document.createElement("select");
            var placeholderOption = document.createElement("option");
            placeholderOption.textContent = element.label;
            newElement.appendChild(placeholderOption);
            element.options.forEach(function(element, index){
                var newOption = document.createElement("option");
                newOption.textContent = element.label;
                newOption.value = element.value;
                newElement.appendChild(newOption);
            });
        }
        else {
            newElement = document.createElement("input");
            newElement.type = element.type;        
        }
        newElement.placeholder = element.label;
        newElement.id = element.id;
        newElement.classList.add("addedElem");

        //create Icons

        if (element.type != "select"){
            var iconElem = document.createElement("i");
            iconElem.classList.add("fa");
            iconElem.classList.add(element.icon);
            elementWrapper.appendChild(iconElem);
        }


        //append stuff
        elementWrapper.appendChild(newElement);
        formInputsWrapper.appendChild(elementWrapper);
        
    });


}

buildForm();
