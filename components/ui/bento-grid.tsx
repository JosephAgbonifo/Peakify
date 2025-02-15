import { cn } from "@/lib/utils";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid md:auto-rows-[18rem] grid-cols-1 md:grid-cols-3 gap-4 max-w-7xl mx-auto ",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  icon,
  img,
  i,
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  img?: string;
  icon?: React.ReactNode;
  i?: number;
}) => {
  return (
    <div
      className={cn(
        "row-span-1 rounded-xl group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none p-4 bg-green border border-green-100 justify-between flex flex-col space-y-4 min-h-[40vh]",
        className
      )}
    >
      {img ? (
        i == 2 ? (
          <img
            src={img}
            alt="network"
            className="sm:absolute sm:right-20 lg:relative  w-56 md:w-[10vw] -mt-10 -mr-10"
          />
        ) : (
          <img
            src={img}
            alt="network"
            className="sm:absolute sm:right-20 lg:relative  w-56 md:w-[20vw] -mt-10 -mr-10"
          />
        )
      ) : (
        ""
      )}
      <div className="group-hover/bento:translate-x-2 transition mb-32 duration-200">
        {icon}
        <div className="font-sans md:text-2xl font-bold text-orange-100 mb-3 mt-2">
          {title}
        </div>
        <div className="font-sans font-normal text-white text-xs ">
          {description}
        </div>
      </div>
    </div>
  );
};
