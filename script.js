function foo() {
    var fname = document.getElementById("fname").value;
    var mname = document.getElementById("mname").value;
    var lname = document.getElementById("lname").value;
    var email = document.getElementById("email").value;
    var address = document.getElementById("address").value;

    console.log("First Name:", fname);
    console.log("Middle Name:", mname);
    console.log("Last Name:", lname);
    console.log("Email:", email);
    console.log("Address:", address);
}

// Create label function
function label_create(tagname, attrname, attrval, content) {
    var ele = document.createElement(tagname);
    ele.setAttribute(attrname, attrval);
    ele.innerHTML = content;
    return ele;
}

// Create input tag function
function input_tag(inputtag, attrname, attrval, attrname1, attrval1) {
    var input_ele = document.createElement(inputtag);
    input_ele.setAttribute(attrname, attrval);
    input_ele.setAttribute(attrname1, attrval1);
    return input_ele;
}

// Create break function
function break_create() {
    var break_ele = document.createElement("br");
    return break_ele;
}

// Create button function
function create_button(inputtag, attrname, attrval, attrname1, attrval1, attrname2, attrval2) {
    var button = document.createElement(inputtag);
    button.setAttribute(attrname, attrval);
    button.setAttribute(attrname1, attrval1);
    button.setAttribute(attrname2, attrval2);
    return button;
}

var firstName = label_create("label", "for", "fname", "First Name");
var break_insert = break_create();
var fName = input_tag("input", "type", "text", "id", "fname");
document.body.append(firstName, break_insert, fName, break_insert);

var middleName = label_create("label", "for", "mname", "Middle Name");
break_insert = break_create(); // Changed variable name
var mName = input_tag("input", "type", "text", "id", "mname");
document.body.append(middleName, break_insert, mName, break_insert);

var lastName = label_create("label", "for", "lname", "Last Name");
break_insert = break_create(); // Changed variable name
var lName = input_tag("input", "type", "text", "id", "lname");
document.body.append(lastName, break_insert, lName, break_insert); // Corrected variable name

var emailLabel = label_create("label", "for", "email", "Email"); // Changed variable name
break_insert = break_create(); // Changed variable name
var eName = input_tag("input", "type", "text", "id", "email");
document.body.append(emailLabel, break_insert, eName, break_insert); // Changed variable name

var addressLabel = label_create("label", "for", "address", "Address"); // Added label for Address
break_insert = break_create();
var addressInput = input_tag("input", "type", "text", "id", "address");
document.body.append(addressLabel, break_insert, addressInput, break_insert);

var clickButton = create_button("input", "type", "button", "onclick", "foo()", "value", "Submit"); // Changed type attribute
document.body.appendChild(clickButton);
