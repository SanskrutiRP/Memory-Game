//fetch the all required fields
let grid = document.getElementById('grid');
let min = document.getElementById('minutes');
let sec = document.getElementById('seconds');
//create small blocks
let nums = new Array(25);
let i = 0;
while(i < 25){
	let num = Math.floor(Math.random() * 25)+1;
	if(nums.indexOf(num) == -1){
		nums[i++] = num;
		let block = document.createElement('div');
		block.classList.add('blocks');	
		block.setAttribute('id', num);
		block.innerText = num;
		if(num == 1){
			block.classList.add('done');
		}
		grid.appendChild(block);
	}
}

let x;
let blocks = document.querySelectorAll('.blocks');
let starttime = 0, endtime = 0;
document.getElementById('start').addEventListener('click',()=>{
	starttime = new Date();	
	blocks.forEach((ele)=>{
		ele.innerText = ' ';
		ele.style.backgroundColor = 'rgba(255, 255, 255, .7)';
	});
	let minutes, seconds;
	x= setInterval(()=>{
		let now = new Date().getTime();
		let d  = now - starttime;
		minutes = Math.floor((d % (1000 * 60 * 60)) / (1000 * 60));
	  	seconds = Math.floor((d % (1000 * 60)) / 1000);
	  	min.innerText = minutes;
	  	sec.innerText = seconds;
	},1000);
	blocks.forEach((ele)=>{
		ele.addEventListener('click', ()=>{
			let id = ele.getAttribute("id");
			if(ele.classList.contains('done') && id == '25'){
				clearInterval(x);
				x = 0;
				min.style.backgroundColor = 'white';
				min.style.color = 'black';
				sec.style.backgroundColor = 'white';
				sec.style.color = 'black';	
				ele.style.transform = 'rotate(360deg)';
				ele.innerText = id;
				ele.style.backgroundColor = 'blueviolet';
			}
			else if(ele.classList.contains('done')){
				ele.style.transform = 'rotate(360deg)';
				ele.innerText = id;
				ele.style.backgroundColor = 'blueviolet';
				let newid = parseInt(id)+1;
				document.getElementById(newid).classList.add('done');
			}
		});
	});
});