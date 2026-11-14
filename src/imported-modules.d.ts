declare module "@/muftlo/*" {
  const component: () => import("react").ReactNode;
  export default component;
}