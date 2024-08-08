import { createContext } from 'react';
import logo from '../assets/logo.webp';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight, faSearch, faArrowRightFromBracket } from '@fortawesome/free-solid-svg-icons';

export const SidebarContext = createContext();

const Sidebar = ({ children, expanded, setExpanded }) => {
  return (
    <aside
      className={`h-screen overflow-hidden transition-[max-width] duration-${
        expanded ? '1000' : '200'
      } ease-in ${expanded ? 'max-w-[336px] w-84' : 'max-w-[60px] w-[60px]'}`}
    >
      <nav className='relative h-full flex flex-col bg-white border-r shadow-sm'>
        <div className='p-4 pt-1 pe-0 pb-2 justify-between flex items-center'>
          <img src={logo} className={`overflow-hidden transition-all my-4 h-7 w-7`} />
          <div className="relative flex-1 ml-2">
            <div className={`relative border-s-2 border-b-2 p-2 pt-0 border-b ms-3 ${expanded ? 'block' : 'hidden'}`}>
              <FontAwesomeIcon
                icon={faSearch}
                className="text-gray-500 absolute left-5 md:ms-0 ms-14 pb-2 top-1/2 transform -translate-y-1/2 z-10"
              />
              <input
                type="search"
                className={`md:w-full md:pl-10 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 ${expanded ? 'block' : 'hidden'}`}
                placeholder="Search..."
              />
            </div>
            <div className={`absolute border-s-2 text-sm h-[89vh] mx-3 w-[242px] ${expanded ? 'block' : 'hidden'}`}>
              <div className="mx-6 text-gray-500 font-semibold text-md mt-3">My Options</div>
              <div className="mx-6 text-gray-500 h-8 hover:bg-slate-100 rounded hover:text-gray-700 hover:cursor-pointer flex items-center font-bold text-xs">
                <span className="mx-2 text-gray-500">
                  <i className="fas fa-tachometer-alt"></i>
                </span>
                Dashboard
              </div>
              <div className="mx-6 text-gray-500 h-8 hover:bg-slate-100 rounded hover:text-gray-700 hover:cursor-pointer flex items-center font-bold text-xs">
                <span className="mx-2 text-gray-500">
                  <i className="far fa-thumbs-up"></i>
                </span>
                Feedbacks
              </div>
              <div className="mx-6 text-gray-500 h-8 hover:bg-slate-100 rounded hover:text-gray-700 hover:cursor-pointer flex items-center font-bold text-xs">
                <span className="mx-2 text-gray-500">
                  <i className="fas fa-calendar-alt"></i>
                </span>
                Leaves
              </div>
              <div className="mx-6 text-gray-500 h-8 hover:bg-slate-100 rounded hover:text-gray-700 hover:cursor-pointer flex items-center font-bold text-xs">
                <span className="mx-2 text-gray-500">
                  <i className="fas fa-check-square"></i>
                </span>
                Attendance
              </div>
              <div className="mx-6 text-gray-500 h-8 hover:bg-slate-100 rounded hover:text-gray-700 hover:cursor-pointer flex items-center font-bold text-xs">
                <span className="mx-2 text-gray-500">
                  <i className="fas fa-clock"></i>
                </span>
                Daily TimeSheet
              </div>
              <div className="mx-6 text-gray-500 h-8 hover:bg-slate-100 rounded hover:text-gray-700 hover:cursor-pointer flex items-center font-bold text-xs">
                <span className="mx-2 text-gray-500">
                  <i className="fas fa-tasks"></i>
                </span>
                Work Log
              </div>
              <div className="mx-6 text-gray-500 h-8 hover:bg-slate-100 rounded hover:text-gray-700 hover:cursor-pointer flex items-center font-bold text-xs">
                <span className="mx-2 text-gray-500">
                  <i className="fas fa-money-check-alt"></i>
                </span>
                Reimbursements
              </div>
              <hr className='h-2' />
              <div className="mx-6 text-gray-500 h-8 hover:bg-slate-100 rounded hover:text-gray-700 hover:cursor-pointer flex items-center font-bold text-xs">
                <span className="mx-2 text-gray-500">
                  <i className="fas fa-file-alt"></i>
                </span>
                Reports
              </div>
              <div className="mx-6 text-gray-500 h-8 hover:bg-slate-100 rounded hover:text-gray-700 hover:cursor-pointer flex items-center font-bold text-xs">
                <span className="mx-2 text-gray-500">
                  <i className="fas fa-wallet"></i>
                </span>
                My Expenses
              </div>
              <div className="mx-6 text-gray-500 h-8 hover:bg-slate-100 rounded hover:text-gray-700 hover:cursor-pointer flex items-center font-bold text-xs">
                <span className="mx-2 text-gray-500">
                  <i className="fas fa-dollar-sign"></i>
                </span>
                Income
              </div>
              <div className="mx-6 text-gray-500 h-8 hover:bg-slate-100 rounded hover:text-gray-700 hover:cursor-pointer flex items-center font-bold text-xs">
                <span className="mx-2 text-gray-500">
                  <i className="fas fa-tags"></i>
                </span>
                Categories
              </div>
              <div className="mx-6 text-gray-500 h-8 hover:bg-slate-100 rounded hover:text-gray-700 hover:cursor-pointer flex items-center font-bold text-xs">
                <span className="mx-2 text-gray-500">
                  <i className="fas fa-cogs"></i>
                </span>
                Setting
              </div>
            </div>
          </div>
        </div>
        <SidebarContext.Provider value={{ expanded }}>
          <ul className='flex-1 px-3'>{children}</ul>
        </SidebarContext.Provider>
        <div className={`flex justify-between items-center p-3`}>
          <FontAwesomeIcon icon={faArrowRightFromBracket} className='ml-2 text-red-600' />
        </div>
      </nav>
    </aside>
  );
};

export default Sidebar;
