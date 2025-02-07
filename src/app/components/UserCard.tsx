import { User } from "../lib/types/user";

const UserCard = ({ user }: { user: User}) => {
  return (
    <div key={user.id} className="p-8 border border-slate-500 flex flex-col gap-3 items-center">
      <div>{user.name}</div>
      <div>{user.email}</div>
      <div>{user.phone}</div>

      {/* 
        Move button to own component
      */}
      <button className='p-2 rounded-md bg-slate-500'>View Address</button>
      
      {/* 
      
        show/hide address UI
        
        street
        city
        zipcode
        lat / lng
        
      */}

      <div className='bg-slate-800 p-4 w-full text-center'>[address details]</div>
    </div>
  );
};

export default UserCard;