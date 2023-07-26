"use client";

import { User } from "@prisma/client";
import { AiOutlineMenu } from "react-icons/ai";
import Avatar from "../Avatar";
import { useCallback, useState } from "react";
import MenuItem from "./MenuItem";
import useRegisterModal from "@/app/hooks/useRegisterModal";
import LoginModal from "../modals/LoginModal";
import useLoginModal from "@/app/hooks/useLoginModal";
import { signOut } from "next-auth/react";
import { toast } from "react-hot-toast";
import useRentModal from "@/app/hooks/useRentModal";
import { useRouter } from "next/navigation";

interface UserMenuProps {
  currentUser?: User | null;
}

const UserMenu: React.FC<UserMenuProps> = ({ currentUser }) => {
  const router = useRouter();
  const registerModal = useRegisterModal();
  const rentModal = useRentModal();
  const loginModal = useLoginModal();
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = useCallback(() => {
    setIsOpen((value) => !value);
  }, []);

  const onRent = useCallback(() => {
    if (!currentUser) {
      return loginModal.onOpen();
    }

    rentModal.onOpen();
  }, [currentUser, loginModal, rentModal]);

  return (
    <div className="relative">
      <div className="flex flex-row items-center gap-3">
        <div
          onClick={onRent}
          className="hidden md:block text-sm font-semibold py-3 px-4 rounded-full hover:bg-neutral-100 transition cursor-pointer"
        >
          Poné tu Airbnb
        </div>
        <div
          onClick={toggleOpen}
          className="p-4 md:py-1 md:px-2 border-[1px] border-neutral-200 rounded-full flex flex-row items-center gap-3 cursor-pointer hover:shadow-md transition"
        >
          <AiOutlineMenu />
          <div className="hidden md:block">
            <Avatar src={currentUser?.image} />
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="absolute overflow-hidden w-[40vw] md:w-3/4 bg-white rounded-xl shadow-md right-0 top-12 text-sm">
          <div className="flex flex-col cursor-pointer">
            {currentUser ? (
              <>
                <MenuItem
                  onClick={() => {
                    router.push("/trips");
                  }}
                  label="Mis viajes"
                />
                <MenuItem
                  onClick={() => {
                    router.push("/favorites");
                  }}
                  label="Mis favoritos"
                />
                <MenuItem
                  onClick={() => {
                    router.push("/reservations");
                  }}
                  label="Mis reservaciones"
                />
                <MenuItem
                  onClick={() => {
                    router.push("/properties");
                  }}
                  label="Mis propiedades"
                />
                <MenuItem onClick={rentModal.onOpen} label="Quiero mi Airbnb" />
                <hr />
                <MenuItem
                  onClick={() => {
                    signOut();
                    toast.success("Sesión cerrada con éxito");
                  }}
                  label="Cerrar sessión"
                />
              </>
            ) : (
              <>
                <MenuItem onClick={registerModal.onOpen} label="Registrate" />

                <MenuItem onClick={loginModal.onOpen} label="Iniciar sesión" />
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default UserMenu;
