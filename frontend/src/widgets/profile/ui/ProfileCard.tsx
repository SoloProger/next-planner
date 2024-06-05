import { FaRegUser } from "react-icons/fa6";

function ProfileCard() {
  return (
    <section className="flex-col gap-16 border-1 border-gray border-radius-4 p-20 wp-250 jc-center ai-center">
      <FaRegUser size="120px" color="#f1be70" />
      <div className="flex-col gap-24">
        <h3 className="header-semibold-5">User Name</h3>
        <p className="header-semibold-7">Описание профиля</p>
        <p className="header-semibold-7">Почта</p>
      </div>
    </section>
  );
}

export default ProfileCard;
