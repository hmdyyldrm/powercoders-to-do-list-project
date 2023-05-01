const list = document.querySelector(".list");
const addButton = document.querySelector(".addButton");
const sortButton = document.querySelector(".sortButton");
const info = document.querySelector(".info");
let items = [];
checkList();


addButton.addEventListener("click", () => {
    let input = document.createElement("input");
    input.setAttribute("type", "text");
    document.body.appendChild(input);
    addButton.style.display = "none";
    sortButton.style.display = "none";
    let saveButton = document.createElement("button");
    let cancelButton = document.createElement("button");
    saveButton.textContent = "Save";
    cancelButton.textContent = "Cancel";
    document.body.appendChild(saveButton);
    document.body.appendChild(cancelButton);

    saveButton.addEventListener("click", () => {
        items.push(input.value);
        updateList();
        input.style.display = "none";
        saveButton.style.display = "none";
        cancelButton.style.display = "none";
        addButton.style.display = "inline";

    });

    cancelButton.addEventListener("click", () => {
        input.style.display = "none";
        saveButton.style.display = "none";
        cancelButton.style.display = "none";
        sortButton.style.display = "inline";
        addButton.style.display = "inline";
    });
});

sortButton.addEventListener("click", () => {
    items.sort();
    updateList();
});

function updateList() {
    list.textContent = "";
    items.forEach((element, index) => {
        const item = document.createElement("li");
        item.setAttribute("class", "items");
        item.textContent = element;
        list.appendChild(item);
        //create edit input
        let editInput = document.createElement("input");
        editInput.setAttribute("type", "text");
        item.appendChild(editInput);
        editInput.style.display = "none";
        //create edit button
        const editButton = document.createElement("button");
        editButton.textContent = "Edit";
        editButton.style.display = "none";
        item.appendChild(editButton);
        //create removeButton
        const removeButton = document.createElement("button");
        removeButton.textContent = "Remove";
        removeButton.style.display = "none";
        item.appendChild(removeButton);

        //when click item
        item.addEventListener("click", () => {
            editButton.style.display = "inline";
            removeButton.style.display = "inline";

            //when click editButton
            editButton.addEventListener("click", () => {
                // remove editButton and removeButton
                item.removeChild(editButton);
                item.removeChild(removeButton);
                //create saveButton and cancelButton
                const saveButton = document.createElement("button");
                saveButton.textContent = ("Save");
                item.appendChild(saveButton);
                //when click saveButton
                saveButton.addEventListener("click", () => {
                    items[index] = editInput.value;
                    updateList();
                });
                //create cancelButton
                const cancelButton = document.createElement("button");
                cancelButton.textContent = ("Cancel");
                item.appendChild(cancelButton);
                //when click cancelButton
                cancelButton.addEventListener("click", () => {
                    updateList();
                });
                editInput.style.display = "inline";
                editInput.value = element;
            })
            //when click removeButton
            removeButton.addEventListener("click", () => {
                console.log(items);
                items.splice(index, 1);
                updateList();
            });

        })
    })
    checkList();
}


function checkList() {

    info.textContent = "";
    if (items.length == 0) {
        info.textContent = "Your list is empty. Please use the button to add new item ...";
        sortButton.style.display = "none";
    } else {
        sortButton.style.display = "inline";
    }
}

items.forEach((element, index) => {

});