import React from "react";

const NoDataFoundModal = () => {
  return (
    <dialog id="my_modal_3" className="modal w-4/5 lg:mx-auto">
    <div className="modal-box">
      <form method="dialog">
        {/* if there is a button in form, it will close the modal */}
        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
      </form>
      <h3 className="font-bold text-lg">কোন তথ্য পাওয়া যায়নি!</h3>
      <p className="py-4">নামের বানান ঠিক আছে কিনা দেখুন। পুরো নাম না লিখে নামের অংশ লিখে সার্চ করুন। প্রয়োজনে অ্যাডমিনের সহায়তা নিন, বা গ্রুপে জানান।</p>
    </div>
</dialog>
  );
};

export default NoDataFoundModal;
