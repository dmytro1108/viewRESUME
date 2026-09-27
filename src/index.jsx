"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importStar(require("react"));
const client_1 = require("react-dom/client");
const react_router_dom_1 = require("react-router-dom");
// fill in an array with the objects
let toChooseFrom = [
    {
        company: "Argos Scientific Inc | Camas, WA",
        date: "2023 – 2024",
        desc: "Technical Data & Documentation Technician",
        b1: "Maintained accurate technical records, project notes, and documentation for ongoing research and equipment-related work.",
        b2: "Reviewed project information and technical materials carefully to support accurate reporting and internal decision-making.",
        b3: "Organized data, files, and records so team members could locate information and track project status.",
        b4: "Followed established procedures when handling sensitive data, technical equipment, and project documentation.",
        b5: "Communicated findings, updates, and issues clearly with team members and stakeholders.",
        b6: "Helped identify unclear, missing, or inconsistent information and raised questions when additional review was needed."
    }
];
/**
 * This class will be used to make objects that will
 * populate a scrollable view. The objects will store the
 * date and description of the notable achievment.
 *
 */
class JobExperience extends react_1.Component {
    render() {
        // convert array elements to JSX
        let sDetails = toChooseFrom.map((i) => (<ul style={{ fontSize: "23px", paddingLeft: "20px" }}> 
    
                    <div style={{ fontSize: "28px", fontWeight: "bold", marginTop: "15px" }}>
                        {i.desc}
                    </div>
                    <div style={{ fontSize: "24px", fontWeight: "600", marginTop: "4px" }}>
                        {i.company}
                    </div>
                    <div style={{ fontSize: "22px", marginTop: "2px", marginBottom: "12px" }}>
                        {i.date}
                    </div>
                    <ul style={{ listStyleType: "disc", paddingLeft: "25px" }}>
                        <li style={{ marginBottom: "8px" }}>{i.b1}</li>
                        <li style={{ marginBottom: "8px" }}>{i.b2}</li>
                        <li style={{ marginBottom: "8px" }}>{i.b3}</li>
                        <li style={{ marginBottom: "8px" }}>{i.b4}</li>
                        <li style={{ marginBottom: "8px" }}>{i.b5}</li>
                        <li style={{ marginBottom: "8px" }}>{i.b6}</li>
                    </ul>
                </ul>));
        return <div>
                    <div style={{ fontSize: "23px", marginTop: "8px" }}>
                        {sDetails}
                    </div>             
                </div>;
    }
}
/**
 * This class is a framework for the game description.
 */
class Description extends react_1.Component {
    render() {
        return <div>
                    <ul>
                        
                        {/* Name */}
                        <div style={{ textAlign: "left", fontSize: "42px", fontWeight: "bold" }}>
                            Dmytro (Dima) Hodarenko
                        </div>
    
                        {/* Contact Info */}
                        <div style={{ textAlign: "left", fontSize: "22px", marginTop: "8px", marginBottom: "28px" }}>
                            dmytro1108@gmail.com | <a href="https://github.com/dmytro1108" target="_blank" rel="noreferrer">https://github.com/dmytro1108</a> | +1 360 843 3912
                        </div>
    
                        {/* Professional Skills */}
                        <div style={{ fontSize: "32px", fontWeight: "bold", marginTop: "24px" }}>
                            Professional Skills
                        </div>
                        <ul style={{ fontSize: "22px", marginTop: "12px", listStyleType: "disc", paddingLeft: "25px", lineHeight: "1.6" }}>
                            <li>Research, documentation, record keeping, data handling, and careful review of technical information</li>
                            <li>Written communication, issue summaries, team updates, and organized project notes</li>
                            <li>Spreadsheet and data tools: Microsoft Office 365, Excel, SQL, GitHub</li>
                            <li>Technical tools: Windows PowerShell, Linux, GitHub, basic database concepts</li>
                            <li>Programming exposure: Python, Java, TypeScript, C, Haskell, Swift</li>
                            <li>Work habits: attention to detail, independent problem solving, reliability, and following procedures</li>
                            <li>Languages: English — Fluent; Ukrainian — Fluent</li>
                        </ul>
    
                        {/* Education */}
                        <div style={{ fontSize: "32px", fontWeight: "bold", marginTop: "32px" }}>
                            Education
                        </div>
                        <div style={{ marginTop: "12px", fontSize: "24px" }}>
                            <div style={{ fontWeight: "bold" }}>
                                BS in Computer Science
                            </div>
                            <div style={{ fontSize: "22px" }}>
                                Washington State University | Vancouver, WA
                            </div>
                            <div style={{ fontSize: "22px", marginBottom: "16px" }}>
                                Expected 2027
                            </div>

                            <div style={{ fontWeight: "bold" }}>
                                Associates of Arts
                            </div>
                            <div style={{ fontSize: "22px" }}>
                                Clark College | Vancouver, WA
                            </div>
                            <div style={{ fontSize: "22px" }}>
                                Degree Completed
                            </div>
                        </div>
    
                        {/* Work Experience */}
                        <div style={{ fontSize: "32px", fontWeight: "bold", marginTop: "32px" }}>
                            Work Experience
                        </div>
                    </ul> 
            </div>;
    }
}
/**
 * This class is a framework for the game description.
 */
class Extra extends react_1.Component {
    render() {
        return <div>
                    <ul>
                        {/* Projects */}
                        <div style={{ fontSize: "32px", fontWeight: "bold", marginTop: "32px" }}>
                            Projects
                        </div>
                        <div style={{ fontSize: "23px", marginTop: "12px" }}>

                            <li style={{ listStyleType: "none" }}>
                                <div style={{ fontSize: "26px", fontWeight: "bold" }}>
                                    logdocTIMESYNC
                                </div>
                                <div style={{ fontSize: "20px", fontStyle: "italic", marginBottom: "8px" }}>
                                    Electron • React • TypeScript • SQLite • Python • IPC Architecture
                                </div>
                                <ul style={{ listStyleType: "disc", paddingLeft: "25px", fontSize: "22px", lineHeight: "1.5" }}>
                                    <li style={{ marginBottom: "6px" }}>Built a cross-platform desktop application for business users to document, track, and manage document-based workflows.</li>
                                    <li style={{ marginBottom: "6px" }}>Implemented a local data layer using SQLite (better-sqlite3) with IPC-driven backend architecture for secure renderer–main process communication.</li>
                                    <li style={{ marginBottom: "6px" }}>Developed tools for manual and automated mileage tracking, including OCR/VLM-powered receipt parsing and trip-distance calculation via Python integrations.</li>
                                    <li style={{ marginBottom: "6px" }}>Added account management (login/signup), theme switching, trip history, and JSON export features to improve usability and reporting.</li>
                                    <li style={{ marginBottom: "6px" }}>Structured the app into modular layers (main, preload, renderer, shared types), improving maintainability and scalability for future features.</li>
                                </ul>
                            </li>

                        </div>
                    </ul>
                </div>;
    }
}
const rootElem = document.getElementById('root');
if (rootElem == null) {
    alert('you forgot to put a root element in your HTML file.');
}
const root = (0, client_1.createRoot)(rootElem);
//<Board height={10} width={10}/>
root.render(<react_1.StrictMode>
            <react_router_dom_1.BrowserRouter basename="/didactic-octo-tribble">
                <react_router_dom_1.Routes>
                    <react_router_dom_1.Route path="/" element={<div>
                                <Description />
                                <JobExperience />
                                <Extra />
                            </div>}/>
                </react_router_dom_1.Routes>
            </react_router_dom_1.BrowserRouter>
        </react_1.StrictMode>);
