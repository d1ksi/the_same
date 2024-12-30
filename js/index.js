document.querySelector('.toggle-icon').addEventListener('click', () => {
    const selectedList = document.querySelector('.selected-list');
    selectedList.classList.toggle('active');

    const svg = document.querySelector('.selected-list-svg');
    svg.classList.toggle('active');
});

const listItems = document.querySelectorAll('.select-for-mobile ul li');
listItems.forEach((item) => {
  item.addEventListener('click', () => {
    listItems.forEach((li) => li.classList.remove('selected'));
    item.classList.add('selected');
  });
});

document.querySelector('.header-burger').addEventListener('click', () => {
    const burger = document.querySelector('.header-burger');
    const menu = document.querySelector('.header-menu');
    const selectForMobile = document.querySelector('.select-for-mobile');
    burger.classList.toggle('active');
    menu.classList.toggle('active');
    if (menu.classList.contains('active')) {
        setTimeout(() => {
            selectForMobile.classList.add('active');
        }, 1000);
    } else {
        selectForMobile.classList.remove('active');
    }
});



const routeBlocks = document.querySelectorAll('.rout-wrap');
const tipsBlocks = document.querySelectorAll('.tips');
routeBlocks.forEach(block => {
  block.addEventListener('click', () => {
    routeBlocks.forEach(b => {
      b.classList.remove('active');
      b.querySelector('.check-box').classList.remove('active');
    });
    tipsBlocks.forEach(t => {
      t.classList.remove('active');
    });
    block.classList.add('active');
    block.querySelector('.check-box').classList.add('active');
    const relatedTipsClass = block.classList.contains('czech-republic-ukraine')
      ? 'czech-republic-ukraine'
      : 'ukraine-czech-republic';
    const relatedTips = document.querySelector(`.tips.${relatedTipsClass}`);
    if (relatedTips) {
      relatedTips.classList.add('active');
      const svgElement = document.querySelector('svg.hint-circle');
      if (svgElement) {
        svgElement.classList.remove('hiden');
      }
    }
  });
});

document.querySelectorAll('.accessibly').forEach(button => {
  button.addEventListener('click', () => {
    const tipsBlock = button.closest('.tips');
    if (tipsBlock) {
      tipsBlock.classList.remove('active');
      const svgElement = document.querySelector('svg.hint-circle');
      if (svgElement) {
        svgElement.classList.add('hiden');
      }
    }
  });
});


document.addEventListener("DOMContentLoaded", function() {
  const dropForDeliveryElements = document.querySelectorAll(".drop-for-delivery"); 
  dropForDeliveryElements.forEach(function(dropForDelivery) {
      const dropChoice = dropForDelivery.nextElementSibling;
      const hintElement = dropForDelivery.querySelector(".hint");
      const selectedElement = dropForDelivery.querySelector(".selected");
      if (!dropChoice) {
          console.error("Не найден элемент .drop-choice для этого .drop-for-delivery");
          return;
      }      
      dropForDelivery.addEventListener("click", function() {
          dropForDelivery.classList.toggle("active");
          dropChoice.classList.toggle("active");
      });
      dropChoice.addEventListener("click", function(event) {
          const cityElement = event.target.closest("div");
          if (cityElement) {
              const cityName = cityElement.querySelector("p").textContent;
              selectedElement.textContent = cityName;
              if (selectedElement.textContent.trim() !== "") {
                  hintElement.classList.add("active");
              } else {
                  hintElement.classList.remove("active");
              }
              dropChoice.classList.remove("active");
              dropForDelivery.classList.remove("active");
          }
      });
  });
});



document.querySelectorAll('.detail-wrap').forEach((wrap) => {
  wrap.addEventListener('click', () => {
    document.querySelectorAll('.check-box').forEach((checkBox) => {
      checkBox.classList.remove('active');
    });
    const checkBox = wrap.querySelector('.check-box');
    if (checkBox) {
      checkBox.classList.add('active');
    }
  });
});

