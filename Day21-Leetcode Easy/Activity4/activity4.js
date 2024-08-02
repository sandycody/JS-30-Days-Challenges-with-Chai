function ListNode(val, next) {
    this.val = val;
    this.next = null;
}

const mergeTwoLists = (list1, list2) => {
    let dummyNode = new ListNode(0);
    let current = dummyNode;

    while (list1 !== null && list2 !== null) {
        if (list1.val < list2.val) {
            current.next = list1;
            list1 = list1.next;
        } else {
            current.next = list2;
            list2 = list2.next;
        }
        current = current.next;
    }

    if (list1 !== null) {
        current.next = list1;
    }

    if (list2 !== null) {
        current.next = list2;
    }

    return dummyNode.next;
};

const createLinkedList = (arr) => {
    let head = new ListNode(arr[0]);
    let current = head;
    for (let i = 1; i < arr.length; i++) {
        current.next = new ListNode(arr[i]);
        current = current.next;
    }
    return head;
}

const printList = (head) => {
    let current = head;
    let result = [];
    while (current !== null) {
        result.push(current.val);
        current = current.next;
    }
    console.log(result.join(' -> '));   
}


let list1 = createLinkedList([15, 34, 67]);
let list2 = createLinkedList([11, 45, 53]);

let mergedList = mergeTwoLists(list1, list2);

printList(mergedList); // 11 -> 15 -> 34 -> 45 -> 53 -> 67

console.log();


list1 = createLinkedList([1, 2, 4]);
list2 = createLinkedList([1, 3, 4]);

mergedList = mergeTwoLists(list1, list2);
printList(mergedList); // 1 -> 1 -> 2 -> 3 -> 4 -> 4

