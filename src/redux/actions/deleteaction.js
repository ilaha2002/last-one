export default function delCart  (product) {
    return {
     type:'DELITEM',
     payload: product
    }
 }