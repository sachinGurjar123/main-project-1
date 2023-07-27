import * as React from "react";
import Drawer from "@mui/material/Drawer";
import Link from "next/link";
export default function TemporaryDrawer({ draweerOpen, setDraweerOpen }) {
  return (
    <div>
      <React.Fragment key={"left"}>
        <Drawer
          anchor={"left"}
          open={draweerOpen}
          onClose={() => {
            setDraweerOpen(false);
          }}
        >
          <div className="min-h-screen md:hidden flex">
            <nav className="bg-green-500 w-60 py-4 px-2 space-y-4">
              <Link
                href="#"
                className="flex justify-between text-white font-bold text-xl"
              >
                Your Logo
                <span
                  className=""
                  onClick={() => {
                    setDraweerOpen(false);
                  }}
                >
                  x
                </span>
              </Link>
              <Link
                href="#"
                className="block text-white bg-cyan-300 border-1 hover:text-black"
              >
                Home
              </Link>
              <Link href="#" className="block text-white">
                About
              </Link>
              <Link href="#" className="block text-white">
                Services
              </Link>
              <Link href="#" className="block text-white">
                Contact
              </Link>
            </nav>
          </div>
        </Drawer>
      </React.Fragment>
    </div>
  );
}
