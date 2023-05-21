import React from "react";

export const HomeIcon: React.FC<{ color: string }> = ({ color, ...props }) => {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        id="Icon"
        d="M5 13.5H13M8.38184 1.18771L1.44851 5.87647C1.16713 6.06676 1 6.3748 1 6.70316V15.4784C1 16.3188 1.71634 17 2.6 17H15.4C16.2837 17 17 16.3188 17 15.4784V6.70316C17 6.3748 16.8329 6.06676 16.5515 5.87647L9.61816 1.18771C9.24807 0.937431 8.75193 0.93743 8.38184 1.18771Z"
        stroke={color}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export const EventIcon: React.FC<{ color: string }> = ({ color, ...props }) => {
  return (
    <svg
      width="21"
      height="16"
      viewBox="0 0 21 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M10.9168 10.6169V10.4554M10.9168 8.11449V7.95296M10.9168 5.62272V5.46119M4.84322 0.883179H8.50012C8.53321 2.0624 9.74624 3.00818 10.9335 3.00818C12.1207 3.00818 13.3411 2.0624 13.3742 0.883179H16.4903C18.2446 0.883179 19.6667 2.30533 19.6667 4.05965V11.9404C19.6667 13.6947 18.2446 15.1169 16.4903 15.1169H13.3742C13.3411 13.9377 12.1207 12.9919 10.9335 12.9919C9.74624 12.9919 8.53321 13.9377 8.50012 15.1169H4.84323C3.08891 15.1169 1.66676 13.6947 1.66676 11.9404L1.66675 4.05965C1.66675 2.30533 3.0889 0.883179 4.84322 0.883179Z"
        stroke={color}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export const ProfileIcon: React.FC<{ color: string }> = ({
  color,
  ...props
}) => {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1 16.0937C1 12.9474 3.62857 10.3968 9 10.3968C14.3714 10.3968 17 12.9474 17 16.0937C17 16.5942 16.6348 17 16.1843 17H1.81569C1.3652 17 1 16.5942 1 16.0937Z"
        stroke={color}
        stroke-width="1.5"
      />
      <path
        d="M12 4C12 5.65685 10.6569 7 9 7C7.34314 7 6 5.65685 6 4C6 2.34315 7.34314 1 9 1C10.6569 1 12 2.34315 12 4Z"
        stroke={color}
        stroke-width="1.5"
      />
    </svg>
  );
};
