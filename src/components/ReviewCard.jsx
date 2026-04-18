const ReviewCard = ({ client, project, text, rating }) => {
  return (
    <div className="bg-white border-[3px] border-black shadow-neo p-4 flex flex-col justify-between hover:bg-neo-bg transition-colors">
      <div>
        <div className="flex justify-between items-center mb-2">
          <p className="font-black text-sm">{client}</p>
          <span className="font-bold text-xs flex items-center">⭐ {rating}</span>
        </div>
        <p className="text-[10px] font-bold text-gray-500 uppercase mb-3">{project}</p>
        <p className="text-xs font-medium leading-relaxed">"{text}"</p>
      </div>
    </div>
  );
};

export default ReviewCard;