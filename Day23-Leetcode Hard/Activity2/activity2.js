function ListNode(val, next = null) {
    this.val = val;
    this.next = next;
}

const mergeKLists = (lists) => {
    const dummy = new ListNode(0);
    let current = dummy;

    while (true) {
        let minIndex = -1;
        let minValue = Infinity;

        // Find the list with the smallest current node
        for (let i = 0; i < lists.length; i++) {
            if (lists[i] !== null && lists[i].val < minValue) {
                minValue = lists[i].val;
                minIndex = i;
            }
        }

        // If all lists are exhausted, break the loop
        if (minIndex === -1) {
            break;
        }

        // Append the smallest node to the result list
        current.next = lists[minIndex];
        current = current.next;

        // Move to the next node in the selected list
        lists[minIndex] = lists[minIndex].next;
    }

    return dummy.next;
};

const list1 = new ListNode(1, new ListNode(4, new ListNode(5)));
const list2 = new ListNode(1, new ListNode(3, new ListNode(4)));
const list3 = new ListNode(2, new ListNode(6));

const mergedList = mergeKLists([list1, list2, list3]);

// Print the merged list
let current = mergedList;
while (current !== null) {
    console.log(current.val);
    current = current.next;
}
