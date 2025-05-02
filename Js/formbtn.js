/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

let isButtonClicked = false;
let isButtonClicked2 = false;


        //THIS FUNCTION WILL BE USED TO CALL VIEW REPORTS
        function openGreenView() {
            
            let getViewReportBtn = document.querySelector(".ViewReport_btn");
            let getViewReportBtn1 = document.querySelector(".ViewReport_btn1");
            let getIDNumber = document.getElementById("SAID").innerHTML;
            let getBusinessName = document.getElementById("businessname");
            let getBusinessReg = document.getElementById("businessReg");
            let getEmailTag = document.getElementById("email").innerHTML;
            let emailString = "Business Email Account";
            let emailString2 = "Personal Email Account";
            let html = "South African ID Number";
            //IF THE USER SELECTED BUSINESS 
            if (isButtonClicked === true) {

                getBusinessName.style.visibility = "visible";
                getBusinessReg.style.visibility = "visible";
                getViewReportBtn.style.opacity = "100%";
                getViewReportBtn1.style.opacity = "40%";
                
                isButtonClicked = false;
            }
            //IF THE USER SELECTED BUSINESS AGAIN
            else if(isButtonClicked === false)
            {

                getBusinessName.style.visibility = "hidden";
                getBusinessReg.style.visibility = "hidden";
                getViewReportBtn.style.opacity = "50%";
                //getViewReportBtn1.style.color = "#a1df9f";
                getViewReportBtn.style.opacity = "40%";
                getViewReportBtn1.style.opacity = "100%";
                
                isButtonClicked = true;
            }
            
            
        }
        //THIS FUNCTION WILL BE USED TO CALL VIEW SCHEDULE
        function openGreenView2() {
            
            let getIDNumber = document.getElementById("SAID").innerHTML;
            let getBusinessName = document.getElementById("businessname");
            let getBusinessReg = document.getElementById("businessReg");
            let getformContainer = document.querySelector(".form");
            
            
            let html = "South African ID Number";
            //IF THE USER SELECTED PERSONAL 
            if (isButtonClicked === true) {

                getBusinessName.style.visibility = "visible";
                getBusinessReg.style.visibility = "visible";
                
                
                isButtonClicked = false;
            }
            //IF THE USER SELECTED PERSONAL AGAIN
            else if(isButtonClicked === false)
            {

                getBusinessName.style.visibility = "hidden";
                getBusinessReg.style.visibility = "hidden";
                getformContainer.style.height = "30%";
                

                isButtonClicked = true;
            }
        }
        
        
        ///HOA SCHEDULE
