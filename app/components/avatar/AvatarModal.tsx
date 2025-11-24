"use client";

export default function AvatarModal({
  image,
  onClose,
}: {
  image: string;
  onClose: () => void;
}) {
  return (
    <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50">
      <div className="bg-white rounded-2xl p-6 w-80 shadow-xl text-center">

        <img src={image} alt="Generated Avatar" className="rounded-xl mb-4" />

        <button
          className="bg-black text-white w-full py-3 rounded-xl"
          onClick={onClose}
        >
          Close
        </button>
      </div>
    </div>
  );
}
