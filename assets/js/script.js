document.addEventListener('DOMContentLoaded', () => {
    let menu = document.querySelector('.header-mobile'),
        btnMenu = document.querySelector('.btn-menu'),
        html = document.querySelector('html');

    btnMenu.addEventListener('click', (e) => {
        menu.classList.toggle('open')

        btnMenu.classList.toggle('btn-menu--open')
        html.classList.toggle('no-scroll')
    })

    function resize() {
        let width = window.innerWidth;

        if (width > 1280) {
            menu.classList.remove('open')
            btnMenu.classList.remove('btn-menu--open')
            html.classList.remove('no-scroll')
        } else {
            return
        }
    }

    window.addEventListener('resize', () => {
        resize()
    })
    resize()

    let btnMobileMenu = document.querySelectorAll('.menu-mobile__btn');

    btnMobileMenu.forEach((btn) => {
        btn.addEventListener('click', (e) => {
            console.log(e.target)
            e.target.closest('.menu-mobile__item').classList.toggle('active')
        })
    })

    // scrollbar
    let propCard = document.querySelectorAll('.catalog-menu__subsection-list'),
        tabs = document.querySelectorAll('.tabs__top'),
        customers = document.querySelector('.customers-page__inner');

    function simpleBar(item, options, size, autoHide) {
        item.forEach((card) => {
            new SimpleBar(card, {
                autoHide: autoHide,
                scrollbarMaxSize: size,
                clickOnTrack: true,
                classNames: {
                    track: options
                }
            });
        })
    }
    simpleBar(propCard, 'simplebar-track simplebar-track__subsection', 42, false);
    simpleBar(tabs, 'simplebar-track simplebar-track__tabs', 180, false);

    // Модальное окно
    function showModal(btnOpen, modalBody) {
        btnOpen.click(function () {
            modalBody.addClass('active');
            $('html').addClass('no-scroll');
            return false;
        });

        $(document).keydown(function (e) {
            if (e.keyCode === 27) {
                e.stopPropagation();
                modalBody.removeClass('active');
                $('html').removeClass('no-scroll');
            }
        });

        modalBody.click(function (e) {
            if ($(e.target).closest('.modal__wrapper').length == 0) {
                $(this).removeClass('active');
                $('html').removeClass('no-scroll');
            }
        });

        $('.close-modal').click((e) => {
            modalBody.removeClass('active');
            $('html').removeClass('no-scroll');
        })
    }

    showModal($('.form-modal-open'), $('.modal-form'));

    // Табы
    document.querySelectorAll('.tabs').forEach(component => {
        const tabs = component.querySelectorAll('.tabs__target');
        const panels = component.querySelectorAll('.tabs__panel');
        const slider = component.querySelector('.tabs__slider');
    
        const updateSlider = (activeTab) => {
            let leftOffset = 0;
            let tabFound = false;
            tabs.forEach(tab => {
                if (tab === activeTab) {
                    tabFound = true;
                }
                if (!tabFound) {
                    leftOffset += tab.offsetWidth;
                }
            });
            
            slider.style.width = activeTab.offsetWidth + 'px';
            slider.style.left = leftOffset + 'px';
        };
    
        const changeTab = (event) => {
            const currentTab = event.currentTarget;
            const tabContainer = currentTab.closest('.tabs');
            const activeTab = tabContainer.querySelector('.tabs__target.active');
            const activePanel = tabContainer.querySelector('.tabs__panel.show');
            
            if (activeTab) activeTab.classList.remove('active');
            if (activePanel) activePanel.classList.remove('show');
            
            currentTab.classList.add('active');
            const targetPanel = tabContainer.querySelector(currentTab.dataset.panel);
            if (targetPanel) targetPanel.classList.add('show');
            
            updateSlider(currentTab);
        };
    
        tabs.forEach(tab => {
            tab.addEventListener('click', changeTab);
        });
    
        if (tabs.length > 0) {
            updateSlider(tabs[0]);
        }
    });

    // Разделы
    let sectionsBtn = document.querySelectorAll('.side-menu__item-btn')

    sectionsBtn.forEach((btn) => {
        btn.addEventListener('click', (e) => {
            let section = e.target.closest('.side-menu__item')
            section.classList.toggle('open')
        })
    })

    // Отображение фильтра на мобильной версии
    let filter = document.querySelector('.filter'),
    filterOpen = document.querySelector('.filter-panel__btn'),
    filterClose = document.querySelector('.filter__close');
    
    if(filter) {
        filterOpen.addEventListener('click', (e) => {
            filter.classList.add('open')
            html.classList.add('no-scroll')
        })

        filterClose.addEventListener('click', (e) => {
            filter.classList.remove('open')
            html.classList.remove('no-scroll')
        })
    }

    // Скрытие свойств фильтре, если их больше 4
    const categories = document.querySelectorAll('.filter-category__list');

    categories.forEach(category => {
        const items = category.querySelectorAll('.filter-properties__list');
        const showMoreButtonContainer = category.querySelector('.filter-category__more');
        const maxVisibleItems = 4;
        let isShowingAll = false;

        function updateVisibility() {
            let hiddenCount = 0;

            items.forEach((item, index) => {
                if (index < maxVisibleItems) {
                    item.style.display = 'block';
                } else {
                    item.style.display = 'none';
                    hiddenCount++;
                }
            });

            if (showMoreButtonContainer) {
                if (hiddenCount > 0) {
                    showMoreButtonContainer.style.display = 'block';
                    showMoreButtonContainer.innerHTML = `Показать больше (<span>${hiddenCount}</span>)`;
                } else {
                    showMoreButtonContainer.style.display = 'none';
                }
            }
        }

        function showAllItems() {
            items.forEach(item => {
                item.style.display = 'block';
            });

            if (showMoreButtonContainer) {
                showMoreButtonContainer.textContent = 'Скрыть';
            }
        }

        if (showMoreButtonContainer) {
            showMoreButtonContainer.addEventListener('click', function () {
                isShowingAll = !isShowingAll;

                if (isShowingAll) {
                    showAllItems();
                } else {
                    updateVisibility();
                }
            });
        } 

        updateVisibility();
    });

    // gsap
  
})