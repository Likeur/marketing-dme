const navBar=document.querySelector('.navbar');
const btnMenu=document.querySelector('.btn-menu');
const barUn=document.querySelector('.bar-1');
const barDeux=document.querySelector('.bar-2');
const barTrois=document.querySelector('.bar-3');
const btnHome=document.querySelector('.btn-home');
const btnService=document.querySelector('.btn-service');
const btnAbout=document.querySelector('.btn-about');
const btnTeam=document.querySelector('.btn-team');
const btnContact=document.querySelector('.btn-contact');

btnMenu.addEventListener('click', ()=>{
    navBar.classList.toggle('-translate-x-[0]');
    barDeux.classList.toggle('hidden');
    barUn.classList.toggle('rotate-45');
    barUn.classList.toggle('absolute');
    barUn.classList.toggle('mt-1');
    barTrois.classList.toggle('-rotate-45');
    console.log('click');
})
btnHome.addEventListener('click', ()=>{
    btnHome.classList.add('bg-white');
    btnHome.classList.remove('text-white');
    btnService.classList.remove('bg-white');
    btnService.classList.remove('text-violet-700');
    btnService.classList.remove('rounded-md');
    btnAbout.classList.remove('bg-white');
    btnAbout.classList.remove('text-violet-700');
    btnAbout.classList.remove('rounded-md');
    btnTeam.classList.remove('bg-white');
    btnTeam.classList.remove('text-violet-700');
    btnTeam.classList.remove('rounded-md');

    btnContact.classList.remove('bg-white');
    btnContact.classList.remove('text-violet-700');
    btnContact.classList.remove('rounded-md');
})
btnService.addEventListener('click', ()=>{
    btnHome.classList.remove('bg-white');
    btnHome.classList.add('text-white');
    btnHome.classList.remove('font-bold');
    btnService.classList.add('bg-white');
    btnService.classList.add('text-violet-700');
    btnService.classList.add('rounded-md');
    btnAbout.classList.remove('bg-white');
    btnAbout.classList.remove('text-violet-700');
    btnAbout.classList.remove('rounded-md');
    btnTeam.classList.remove('bg-white');
    btnTeam.classList.remove('text-violet-700');
    btnTeam.classList.remove('rounded-md');

    btnContact.classList.remove('bg-white');
    btnContact.classList.remove('text-violet-700');
    btnContact.classList.remove('rounded-md');
})
btnAbout.addEventListener('click', ()=>{
    btnHome.classList.remove('bg-white');
    btnHome.classList.add('text-white');
    btnHome.classList.remove('font-bold');
    btnService.classList.remove('bg-white');
    btnService.classList.remove('text-violet-700');
    btnService.classList.remove('rounded-md');
    btnAbout.classList.add('bg-white');
    btnAbout.classList.add('text-violet-700');
    btnAbout.classList.add('rounded-md');

    btnTeam.classList.remove('bg-white');
    btnTeam.classList.remove('text-violet-700');
    btnTeam.classList.remove('rounded-md');

    btnContact.classList.remove('bg-white');
    btnContact.classList.remove('text-violet-700');
    btnContact.classList.remove('rounded-md');
})
btnTeam.addEventListener('click', ()=>{
    btnHome.classList.remove('bg-white');
    btnHome.classList.add('text-white');
    btnHome.classList.remove('font-bold');
    btnService.classList.remove('bg-white');
    btnService.classList.remove('text-violet-700');
    btnService.classList.remove('rounded-md');
    btnAbout.classList.remove('bg-white');
    btnAbout.classList.remove('text-violet-700');
    btnAbout.classList.remove('rounded-md');

    btnTeam.classList.add('bg-white');
    btnTeam.classList.add('text-violet-700');
    btnTeam.classList.add('rounded-md');

    btnContact.classList.remove('bg-white');
    btnContact.classList.remove('text-violet-700');
    btnContact.classList.remove('rounded-md');

})

btnContact.addEventListener('click', ()=>{
    btnHome.classList.remove('bg-white');
    btnHome.classList.add('text-white');
    btnHome.classList.remove('font-bold');
    btnService.classList.remove('bg-white');
    btnService.classList.remove('text-violet-700');
    btnService.classList.remove('rounded-md');
    btnAbout.classList.remove('bg-white');
    btnAbout.classList.remove('text-violet-700');
    btnAbout.classList.remove('rounded-md');
    btnTeam.classList.remove('bg-white');
    btnTeam.classList.remove('text-violet-700');
    btnTeam.classList.remove('rounded-md');

    btnContact.classList.add('bg-white');
    btnContact.classList.add('text-violet-700');
    btnContact.classList.add('rounded-md');
})
