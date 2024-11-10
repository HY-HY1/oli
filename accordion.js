function toggleAccordion(header) {
    const accordionItem = header.parentElement;
    accordionItem.classList.toggle("active");

    

    const allItems = document.querySelectorAll(".accordion-item");
    allItems.forEach(item => {
        if (item !== accordionItem) {
            item.classList.remove("active");
        }
    });
}