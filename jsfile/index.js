function navigate_ticket_form(){
    const a = document.getElementById('ticket_form');
    a.scrollIntoView({behavior:'smooth'});
}

//blank array and count sit
var seat_array = [];
var seat_count = 0;

//seat value count
var seat_value = 0;

//seats value left
var seat_value_left = 40;

// collect seats
const all_seats = document.querySelectorAll('.bus_seat');

for (let seat_index = 0; seat_index < all_seats.length; seat_index++){
    const seat = all_seats[seat_index];
    //every seat will come one by one in seat variable
    seat.addEventListener('click',function(event){
        var seat_text= seat.innerText;
        seat_count += 1 ;
        if(seat_array.includes(seat_text)){
            alert('It has been selected');
            seat_count -= 1 ;
        }
        else if(seat_count > 4){
            alert('You can choose only 4 Seats');
            seat_count -=1 ;
        }
        else{
            seat_array.push(seat_text);
            seat.style.backgroundColor = '#1DD100';
            var seat_value_element = document.getElementById('seat_value');
            seat_value += 1;
            seat_value_element.innerText = seat_value;
            var seats_left = document.getElementById('seats_left');
            seat_value_left -= 1;
            seats_left.innerText = seat_value_left;
            var div_element = document.createElement('div');
            div_element.classList.add('flex','justify-between','items-center','mx-8');
            var p1 = document.createElement('p');
            p1.innerText = seat_text;
            var p2 = document.createElement('p');
            p2.innerText = 'Economy';
            var p3 = document.createElement('p');
            p3.innerText = 550;
            div_element.appendChild(p1);
            div_element.appendChild(p2);
            div_element.appendChild(p3);
            var get_sibling = document.getElementById('sibling_element');
            var add_before_sibling = get_sibling.parentNode;
            add_before_sibling.insertBefore(div_element, get_sibling);
        }
    })
}