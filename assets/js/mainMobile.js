const containerAbreMenu = document.querySelector(".containerAbreMenu")
        const containerMenu = document.querySelector(".containerMenu")
        const closeMenu = document.querySelector(".containerMenu .close")
        const optionsMenu = document.querySelector(".optionsMenu")
        const containerTitle = document.querySelector(".containerTitle")
        const containerSalario = document.querySelector(".containerSalario")
        const descDiv = document.querySelector(".containerDesc .desc")
        const containerTitleMaterias = document.querySelector(".containerMaterias .containerTitle")
        const containerImg = document.querySelector(".containerDesc .containerImg")
        const containerAbreMenuH1 = document.querySelector(".containerAbreMenu h1")
        
        
        
        function chamaFuncoes(){
            
            criaBtnsMenu();
            escutaOptionsMenu();
        }

        containerAbreMenu.addEventListener("click", function(){
            containerMenu.classList.add("menuOpened")
        })
        closeMenu.addEventListener("click", function(){
            containerMenu.classList.remove("menuOpened")
        })

        function criaBtnsMenu(){
            for(let i in concursos){
                let concursoName = concursos[i].cargo;
                optionsMenu.innerHTML += `<span data-index="${i}">${concursoName}</span>`
            }
        }
        function escutaOptionsMenu(){
            
            optionsMenu.addEventListener("click", function(e){
                let indexClick = e.target.getAttribute("data-index")

                if(indexClick){
                    containerMenu.classList.remove("menuOpened")
                    informacoesConcurso(indexClick)
                }
            })
        }
       
        function informacoesConcurso(indexClick){
            let cargoName = concursos[indexClick].cargo;
            let salario = concursos[indexClick].salario;
            let desc = concursos[indexClick].desc;
            let img = concursos[indexClick].urlImagem;
            let materias = concursos[indexClick].materias;
            let containerMaterias = document.querySelector(".mostraMaterias")
            containerMaterias.innerHTML = '';
            containerAbreMenuH1.innerHTML = '';
            if(document.body.clientWidth <= 768){
                containerImg.style.display = "none";
            } else{
                containerImg.style.backgroundImage = `url("${img}")`
            }

            containerTitle.innerHTML = `<h1> ${cargoName}</h1>`;
            containerSalario.innerHTML = `<p>Salário: ${salario}</p>`;
            descDiv.innerHTML = `<p>Descrição: ${desc}</p>`
            
            containerTitleMaterias.innerHTML = "<h3>Matérias que caem no concurso</h3>"

            for(let i in materias){
                let materiaName = materias[i].nomeMateria;
                containerMaterias.innerHTML += `<span data-index="${i}">${materiaName}</span>`
            }
        }
        
        chamaFuncoes();