let canvas=document.getElementById('canvas');
if(canvas.getContext){
    let ctx=canvas.getContext('2d');
    ctx.fillStyle="rgb(200, 0, 0)";
    ctx.fillRect(10, 10, 50, 50);

    ctx.fillStyle='rgba(0, 0, 200, 0.5)';
    ctx.fillRect(30, 30, 50, 50);
}

const menu_items=[...document.querySelectorAll('#main-menu > div')];
const sub_item_list=[...document.querySelectorAll('ul.menu')];
let visible_menu=[];

menu_items.forEach(item=>{
    item.querySelector('li').addEventListener('click', ()=>{
        if(visible_menu.length!==0){
            let to_hide=visible_menu.shift();
            to_hide.querySelector('li').classList.remove('active');
            to_hide.querySelector('ul.menu').style.visibility="hidden";
            if(to_hide===item){return;}
        }
        sub_item_list[menu_items.indexOf(item)].style.visibility="visible";
        visible_menu.push(menu_items[menu_items.indexOf(item)]);
        item.querySelector('li').classList.add('active');
    });
});

window.addEventListener('mousemove', function(e){
    document.getElementById('cursor-pos').textContent=`${e.clientX}x${e.clientY}`;
});

const func_buttons=[...document.querySelectorAll("#buttons button")];
func_buttons.forEach(button=>{
    button.addEventListener('click', ()=>{button.classList.toggle('btn-pressed');});
});

let back_fore_color=document.getElementById('foreground');
const back_fore=document.querySelectorAll('.pressed button');
back_fore.forEach(b_f=>{
    b_f.addEventListener('click', ()=>{
        back_fore_color=b_f;
        document.getElementById('color-select').style.backgroundColor=b_f.style.backgroundColor;
    });
});

const color_change=document.querySelectorAll(".color");
color_change.forEach(color=>{
    color.addEventListener('click', ()=>{
        let col=color.style.backgroundColor;
        document.getElementById('color-select').style.backgroundColor=col;
        back_fore_color.style.backgroundColor=col;
    });
});