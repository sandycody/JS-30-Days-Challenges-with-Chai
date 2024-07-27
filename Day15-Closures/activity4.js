// Task 6 : Use closures to create a simple module for managing a collection of items. Implement methods to add, remove, and list items.

function itemManager() {
    const itemsArr = [];

    function addItem(item) {
        itemsArr.push(item);
        console.log(`Item ${item} has been added`);
    }

    function removeItem(item) {
        const index = itemsArr.indexOf(item);
        if (index > -1) {
            itemsArr.splice(index, 1);
            console.log(`${item} has been removed`);
        } else {
            console.log(`${item} didn't found in collection`);
        }
    }

    function getItem() {
        if (itemsArr.length == 0) {
            console.log("The collection is empty");
        } else {
            console.log(`Items present in the collection are as follows : `);
            itemsArr.map((item, index) => {
                console.log(`Item ${index + 1} => ${item}`);
            })
        }
    }

    return { addItem, removeItem, getItem };
}

const itemModule = itemManager();

itemModule.addItem(23); //Item 23 has been added
itemModule.addItem(60); //Item 60 has been added
itemModule.addItem(1); //Item 1 has been added
itemModule.addItem(43); //Item 43 has been added

console.log();

itemModule.removeItem(1); //1 has been removed
itemModule.removeItem(10); //10 didn't found in collection

console.log();

itemModule.getItem();