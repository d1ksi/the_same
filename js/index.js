
const buttons = document.querySelectorAll('.title-btn, .needed-for-translation-btn, .compare-btn');
const popupOverlay = document.querySelector('.popup-overlay');
const closeButton = popupOverlay ? popupOverlay.querySelector('.close') : null;
const methods = popupOverlay ? popupOverlay.querySelectorAll('.method') : null;
if (popupOverlay) {
  buttons.forEach(button => {
    button.addEventListener('click', () => {
      popupOverlay.classList.add('active');
    });
  });
  if (closeButton) {
    closeButton.addEventListener('click', () => {
      popupOverlay.classList.remove('active');
    });
  }
  if (methods) {
    methods.forEach(method => {
      method.addEventListener('click', () => {
        if (method.classList.contains('active')) {
          method.classList.remove('active');
        } else {
          methods.forEach(m => m.classList.remove('active'));
          method.classList.add('active');
        }
      });
    });
  }
}













document.addEventListener("DOMContentLoaded", () => {
  const exchangeBlocks = document.querySelectorAll(".block-exchange");
  if (exchangeBlocks.length === 0) return;
  exchangeBlocks.forEach((block) => {
      const selectedWrapper = block.querySelector(".selected-block-wrapper");
      const dropdown = block.querySelector(".dropdown");
      const selectedBlock = block.querySelector(".selected-block");
      const listItems = dropdown.querySelectorAll("li");

      const updateSelectedContent = () => {
          const selectedItem = dropdown.querySelector("li.selected");
          if (selectedItem) {
              const text = selectedItem.querySelector("p").textContent;
              const imgSrc = selectedItem.querySelector("img").getAttribute("src");

              selectedBlock.innerHTML = `
                  <p>${text}</p>
                  <img src="${imgSrc}" alt="">
              `;
          }
      };
      updateSelectedContent();
      selectedWrapper.addEventListener("click", (event) => {
          if (selectedWrapper.classList.contains("active")) {
              selectedWrapper.classList.remove("active");
              dropdown.classList.remove("active");
          } else {
              selectedWrapper.classList.add("active");
              dropdown.classList.add("active");
          }
          event.stopPropagation();
      });
     listItems.forEach((item) => {
          item.addEventListener("click", (event) => {
              dropdown.querySelector("li.selected")?.classList.remove("selected");
              item.classList.add("selected");
              updateSelectedContent();
              dropdown.classList.remove("active");
              selectedWrapper.classList.remove("active");
              event.stopPropagation();
          });
      });
      document.addEventListener("click", (event) => {
          if (!block.contains(event.target)) {
              dropdown.classList.remove("active");
              selectedWrapper.classList.remove("active");
          }
      });
  });
});












const switchElement = document.querySelector('.swith');
if (switchElement) {
  switchElement.addEventListener('click', function () {
    const block = document.querySelector('.block-exchange-wrapper');
    if (block) {
      block.classList.toggle('active');
    }
  });
}













document.addEventListener('DOMContentLoaded', function () {
  const exchangeBtn = document.querySelector('.exchange-btn');
  const popupOverlay = document.querySelector('.popup-overlay');
  const closeBtn = document.querySelector('.close');
  exchangeBtn.addEventListener('click', function () {
    popupOverlay.classList.add('active');
  });
  closeBtn.addEventListener('click', function () {
    popupOverlay.classList.remove('active');
  });
});























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


document.addEventListener("DOMContentLoaded", function () {
  const dropForDeliveryElements = document.querySelectorAll(".drop-for-delivery");
  dropForDeliveryElements.forEach(function (dropForDelivery) {
    const dropChoice = dropForDelivery.nextElementSibling;
    const hintElement = dropForDelivery.querySelector(".hint");
    const selectedElement = dropForDelivery.querySelector(".selected");
    if (!dropChoice) {
      console.error("Не найден элемент .drop-choice для этого .drop-for-delivery");
      return;
    }
    dropForDelivery.addEventListener("click", function () {
      dropForDelivery.classList.toggle("active");
      dropChoice.classList.toggle("active");
    });
    dropChoice.addEventListener("click", function (event) {
      const cityElement = event.target.closest("div");
      if (cityElement) {
        const cityNameElement = cityElement.querySelector("p");
        if (cityNameElement) {
          const cityName = cityNameElement.textContent;
          selectedElement.textContent = cityName;
          if (selectedElement.textContent.trim() !== "") {
            hintElement.classList.add("active");
          } else {
            hintElement.classList.remove("active");
          }
        } else {
          console.error("Элемент <p> не найден внутри cityElement:", cityElement);
        }
        dropChoice.classList.remove("active");
        dropForDelivery.classList.remove("active");
      }
    });
  });
});



document.addEventListener('DOMContentLoaded', () => {
  const routeBlocks = document.querySelectorAll('.rout-wrap');
  const tipsBlocks = document.querySelectorAll('.tips');
  const accessiblyButtons = document.querySelectorAll('.accessibly');
  const parcelButton = document.querySelector('.parcel-btn');
  const parcelTipsBlock = document.querySelector('.parcel-tips');
  const parcelHintCircle = document.querySelector('.parcel-hint-circle');
  routeBlocks.forEach(block => {
    block.addEventListener('click', () => {
      routeBlocks.forEach(b => {
        b.classList.remove('active');
        b.querySelector('.check-box').classList.remove('active');
        const svgElement = b.querySelector('svg.hint-circle');
        if (svgElement) {
          svgElement.classList.add('hiden');
        }
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
        const svgElement = block.querySelector('svg.hint-circle');
        if (svgElement) {
          svgElement.classList.remove('hiden');
        }
      }
    });
  });
  accessiblyButtons.forEach(button => {
    button.addEventListener('click', () => {
      const tipsBlock = button.closest('.tips');
      if (tipsBlock) {
        tipsBlock.classList.remove('active');
        const routeBlock = tipsBlock.closest('.rout-wrap');
        const svgElement = routeBlock?.querySelector('svg.hint-circle'); // Работаем с SVG внутри текущего блока

        if (svgElement) {
          svgElement.classList.add('hiden');
          if (routeBlocks[0] === routeBlock) {
            svgElement.classList.add('accept');
            console.log('Класс accept добавлен к SVG первого блока');
          } else {
            console.log('Класс accept не добавлен, это не первый блок');
          }
        } else {
          console.log('SVG элемент не найден для этого блока');
        }
      } else {
        console.log('Tips блок не найден для кнопки');
      }
    });
  });
  if (parcelButton && parcelTipsBlock && parcelHintCircle) {
    parcelButton.addEventListener('click', () => {
      parcelTipsBlock.style.display = 'none';
      parcelHintCircle.classList.add('hidden');
    });
  } else {
    console.error('Не удалось найти один из элементов:', {
      parcelButton,
      parcelTipsBlock,
      parcelHintCircle,
    });
  }
});


document.addEventListener('DOMContentLoaded', () => {
  const labels = document.querySelectorAll('.detail-wrap');
  const inputField = document.querySelector('.with-information-input');
  const whatsPackageDiv = document.querySelector('.whats-package');
  labels.forEach(label => {
      label.addEventListener('click', (e) => {
          const p = label.querySelector('p');
          const checkbox = label.querySelector('input');
          if (p.classList.contains('checked')) {
              p.classList.remove('checked');
              checkbox.checked = false;
              if (label.classList.contains('with-input')) {
                  inputField.classList.remove('active');
              }
          } else {
              labels.forEach(l => {
                  l.querySelector('p').classList.remove('checked');
                  l.querySelector('input').checked = false;
              });
              p.classList.add('checked');
              checkbox.checked = true;
              if (label.classList.contains('with-input')) {
                  inputField.classList.add('active');
              } else {
                  inputField.classList.remove('active');
              }
          }
          if (label.classList.contains('with-information')) {
              whatsPackageDiv.classList.remove('active');
          } else {
              whatsPackageDiv.classList.add('active');
          }

          e.preventDefault();
      });
  });
});



const paragraphs = document.querySelectorAll('.whats-package-wrap p');
paragraphs.forEach(p => {
   p.addEventListener('click', function () {
      this.classList.toggle('checked');
   });
});


document.addEventListener('DOMContentLoaded', function() {
  var deliveryCalculationButton = document.getElementById('delivery-calculation');
  if (deliveryCalculationButton) {
      deliveryCalculationButton.addEventListener('click', function() {
          var activeRoute = document.querySelector('.rout-wrap.active p').textContent;
          document.querySelector('.czech-republic-ukraine-box').classList.remove('active');
          document.querySelector('.ukraine-czech-republic-box').classList.remove('active');
          document.querySelector('main').classList.remove('active');
          if (activeRoute === 'Чехія-Україна') {
              document.querySelector('.czech-republic-ukraine-box').classList.add('active');
          } else if (activeRoute === 'Україна-Чехія') {
              document.querySelector('.ukraine-czech-republic-box').classList.add('active');
          }
          document.querySelector('main').classList.add('active');
          syncWhatsPackage();
      });
  }
  var closeButtons = document.querySelectorAll('.close');
  if (closeButtons.length > 0) {
      closeButtons.forEach(function(closeButton) {
          closeButton.addEventListener('click', function() {
              var box = closeButton.closest('.czech-republic-ukraine-box, .ukraine-czech-republic-box');
              if (box) {
                  box.classList.remove('active');
                  if (!document.querySelector('.czech-republic-ukraine-box.active') && 
                      !document.querySelector('.ukraine-czech-republic-box.active')) {
                      document.querySelector('main').classList.remove('active');
                  }
              }
              syncWhatsPackage();
          });
      });
  }
});






function syncWhatsPackage() {
  const routeDiv = document.querySelector('.rout-wrap.ukraine-czech-republic');
  const whatsPackageDiv = document.querySelector('.whats-package');
  
  if (routeDiv && whatsPackageDiv) {
      if (routeDiv.classList.contains('active')) {
          whatsPackageDiv.classList.add('active');
      } else {
          whatsPackageDiv.classList.remove('active');
      }
  }
}

// Добавляем наблюдатель за изменениями класса, если требуется автоматическая синхронизация
const observer = new MutationObserver(() => syncWhatsPackage());
const target = document.querySelector('.rout-wrap.ukraine-czech-republic');
if (target) {
  observer.observe(target, { attributes: true, attributeFilter: ['class'] });
}


document.addEventListener('DOMContentLoaded', () => {
  const accessiblyButtons = document.querySelectorAll('.accessibly');
  const svgElements = document.querySelectorAll('svg.hint-circle');
  accessiblyButtons.forEach(button => {
    button.addEventListener('click', () => {
      const tipsBlock = button.closest('.tips');
      if (tipsBlock) {
        tipsBlock.classList.remove('active');
        const svgElement = tipsBlock.querySelector('svg.hint-circle');
        if (svgElement) {
          svgElement.classList.add('hidden');
        }
      }
    });
  });
});





function updateTipsBasedOnRoute() {
  document.querySelectorAll('.tips').forEach(block => {
      block.classList.remove('active');
      block.style.display = '';
  });
  const activeRoute = document.querySelector('.rout-wrap.active');
  if (activeRoute) {
      const routeClass = activeRoute.classList.contains('czech-republic-ukraine')
          ? 'czech-republic-ukraine'
          : 'ukraine-czech-republic';
      const tipsBlock = document.querySelector(`.tips.${routeClass}`);
      if (tipsBlock) {
          tipsBlock.classList.add('active');
          tipsBlock.style.display = 'inline-flex';
      }
  }
}

document.querySelector('.svg-title-wrap').addEventListener('click', () => {
  document.querySelectorAll('.parcel-tips').forEach(block => {
      block.classList.remove('active');
      block.style.display = '';
  });
  updateTipsBasedOnRoute();
  const parcelTipsBlock = document.querySelector('.parcel-tips');
  if (parcelTipsBlock) {
      parcelTipsBlock.classList.add('active');
      parcelTipsBlock.style.display = 'inline-flex';
  }
});
document.querySelectorAll('.accessibly').forEach(button => {
  button.addEventListener('click', () => {
      const parentBlock = button.closest('.tips');
      if (parentBlock) {
          parentBlock.classList.remove('active');
          parentBlock.style.display = '';
      }
  });
});
document.querySelectorAll('.rout-wrap').forEach(route => {
  route.addEventListener('click', () => {
      document.querySelectorAll('.rout-wrap').forEach(r => {
          r.classList.remove('active');
          r.querySelector('.check-box').classList.remove('active');
      });
      route.classList.add('active');
      route.querySelector('.check-box').classList.add('active');
      updateTipsBasedOnRoute();
  });
});






