export default function HeaderIcon({ Icon, active }) {
  return (
    <div className="flex items-center cursor-pointer md:px-10 sm:h-14 hover:bg-gray-100 rounded-xl active:border-b-2 border-blue-500 hover:text-blue-500">
      <Icon className={`h-5 text-center sm:h-7 mx-auto text-gray-500 ${active && 'text-blue-500'}`} />
    </div>
  );
}
