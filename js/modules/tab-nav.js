export default function initTabNav(){
    const tabmenu = document.querySelectorAll('[data-tab="menu"] li');
    const tabcontent = document.querySelectorAll('[data-tab="content"] section');
    if( tabmenu.length && tabcontent.length){
        tabcontent[0].classList.add('ativo');

            function activeTab(index){
                tabcontent.forEach((section) => {
                    section.classList.remove('ativo');
                });
                console.log(tabcontent[index].dataset.anime);
                const direcao = tabcontent[index].dataset.anime
                tabcontent[index].classList.add('ativo', direcao);
            }

            tabmenu.forEach((itemMenu, index)=>{
                    itemMenu.addEventListener('click', () =>{
                        activeTab(index);
                    })
            });
    }
}








