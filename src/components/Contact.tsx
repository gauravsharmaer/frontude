// import Image from "next/image";
// import Background from "../assets/drawing-2.svg";
// import { Formik, Form, Field, ErrorMessage } from "formik";
// import * as Yup from "yup";
// import Message from "../assets/Message.svg";

// const Contact = () => {
//   const initialValues = {
//     name: "",
//     email: "",
//     message: "",
//   };

//   const validationSchema = Yup.object({
//     name: Yup.string().required("Required"),
//     email: Yup.string().email("Invalid email format").required("Required"),
//     message: Yup.string().required("Required"),
//   });

//   const onSubmit = (values: typeof initialValues) => {
//     console.log(values);
//   };

//   return (
//     <section className="h-auto w-full flex flex-col relative items-center px-[80px] py-4 overflow-hidden">
//       {/* Remove or adjust the background image */}
//       {/* <Image src={Background} alt="Background" layout="fill" objectFit="cover" className="-z-30 h-full w-full" /> */}

//       {/* Remove or adjust the overlay */}
//       {/* <div className="absolute inset-0 bg-black/70 -z-20 transition-[mask-position] duration-300 ease-in-out" /> */}
//       <div className="flex flex-col items-center">
//         <div className="flex items-center gap-4 mt-12">
//           <div className="fading_div_left"></div>
//           <strong className="text-white text-[24px]">
//             Want to work with us?
//           </strong>
//           <div className="fading_div_right"></div>
//         </div>
//         <p className=" text-[24px] relative text-center opacity-70">
//           We’d love to hear from you. Let’s talk about your project and how we
//           can help you bring your ideas to life.
//         </p>
//       </div>

//       <Formik
//         initialValues={initialValues}
//         validationSchema={validationSchema}
//         onSubmit={onSubmit}
//       >
//         <Form className="flex items-center w-full mt-[80px]  border border-[#202020] rounded-lg py-9">
//           <div className="flex items-center w-[30%] justify-center">
//             <Image
//               src={Message}
//               alt="Message"
//               height={300}
//               className="opacity-70"
//             />
//           </div>
//           <div className="flex flex-col items-center w-[70%] gap-5">
//             <div className="flex flex-col items-start w-[60%] gap-4">
//               <label htmlFor="name" className="text-white">
//                 Name
//               </label>
//               <Field type="text" id="name" name="name" className="w-full p-2" />
//               <ErrorMessage
//                 name="name"
//                 component="div"
//                 className="text-red-500"
//               />
//             </div>
//             <div className="flex flex-col items-start w-[60%] gap-4">
//               <label htmlFor="email" className="text-white">
//                 Email
//               </label>
//               <Field
//                 type="email"
//                 id="email"
//                 name="email"
//                 className="w-full p-2"
//               />
//               <ErrorMessage
//                 name="email"
//                 component="div"
//                 className="text-red-500"
//               />
//             </div>
//             <div className="flex flex-col items-start w-[60%] gap-4">
//               <label htmlFor="message" className="text-white">
//                 Message
//               </label>
//               <Field
//                 as="textarea"
//                 id="message"
//                 name="message"
//                 className="w-full p-2"
//               />
//               <ErrorMessage
//                 name="message"
//                 component="div"
//                 className="text-red-500"
//               />
//             </div>
//             <button
//               type="submit"
//               className="ct1 bg-white px-12 py-2 rounded-sm w-[320px] text-white text-[20px]"
//             >
//               Send Message
//             </button>
//           </div>
//         </Form>
//       </Formik>
//     </section>
//   );
// };

// export default Contact;
