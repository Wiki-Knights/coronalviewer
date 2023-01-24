//Coronal Slices
var SlicesInfo = function () {
    var data = [{
        path: "c1/",
        thumb: "c1thumb",
        view: {
            main: "c1brain",
            overlays: [{
                label: "Orbitofrontal Cortex",
                src: "c1OFC"
            }, {
                label: "Sagittal Fissure",
                src: "c1SF"
            }],
            mri: {
                src: "c1mri",
                labels: "c1mrilabels"
            },
            textLabels: "",
            perfusionAreas: ""
        }
    }, {
        path: "c2/",
        thumb: "c2thumb",
        view: {
            main: "c2brain",
            overlays: [{
                label: "Anterior Cerebral Artery",
                src: "c2ACA"
            }, {
                label: "Orbitofrontal Cortex",
                src: "c2OFC"
            }, {
                label: "Sagittal Fissure",
                src: "c2SF"
            }],
            mri: {},
            textLabels: "",
            perfusionAreas: ""
        }
    }, {
        path: "c3/",
        thumb: "c3thumb",
        view: {
            main: "c3brain",
            overlays: [{
                label: "Anterior Cerebral Artery",
                src: "c3ACA"
            }, {
                label: "Orbitofrontal Cortex",
                src: "c3OFC"
            }, {
                label: "Sagittal Fissure",
                src: "c3SF"
            }],
            mri: {
                src: "c3mri",
                labels: "c3mrilabels"
            },
            textLabels: "",
            perfusionAreas: ""
        }
    }, {
        path: "c4/",
        thumb: "c4thumb",
        view: {
            main: "c4brain",
            overlays: [{
                label: "Anterior Cerebral Artery",
                src: "c4ACA"
            }, {
                label: "Corpus Callosum",
                src: "c4CC"
            }, {
                label: "Sagittal Fissure",
                src: "c4SF"
            }],
            mri: {},
            textLabels: "c4labels",
            perfusionAreas: "c4perfusion"
        }
    }, {
        path: "c5/",
        thumb: "c5thumb",
        view: {
            main: "c5brain",
            overlays: [{
                label: "Anterior Cerebral Artery (Branch)",
                src: "c5ACA"
            }, {
                label: "Corpus Callosum",
                src: "c5CC"
            }, {
                label: "Lateral Ventricles - Anterior Horn",
                src: "c5LV"
            }, {
                label: "Sagittal Fissure",
                src: "c5SF"
            }],
            mri: {},
            textLabels: "c5labels",
            perfusionAreas: ""
        }
    }, {
        path: "c6/",
        thumb: "c6thumb",
        view: {
            main: "c6brain",
            overlays: [{
                label: "Anterior Cerebral Artery (Branch)",
                src: "c6ACA"
            }, {
                label: "Caudate Nucleus",
                src: "c6CN"
            }, {
                label: "Cingulate Gyrus",
                src: "c6CG"
            }, {
                label: "Cingulum",
                src: "c6cing"
            }, {
                label: "Corpus Callosum",
                src: "c6CC"
            }, {
                label: "Lateral Ventricles - Anterior Horn",
                src: "c6LV"
            }, {
                label: "Putamen",
                src: "c6put"
            }, {
                label: "Sagittal Fissure",
                src: "c6SF"
            }],
            mri: {},
            textLabels: "c6labels",
            perfusionAreas: ""
        }
    }, {
        path: "c7/",
        thumb: "c7thumb",
        view: {
            main: "c7brain",
            overlays: [{
                label: "Caudate Nucleus",
                src: "c7CN"
            }, {
                label: "Cingulate Gyrus",
                src: "c7CG"
            }, {
                label: "Cingulum",
                src: "c7cing"
            }, {
                label: "Claustrum",
                src: "c7claus"
            }, {
                label: "Corpus Callosum",
                src: "c7CC"
            }, {
                label: "Lateral Fissure",
                src: "c7LF"
            }, {
                label: "Lateral Ventricles - Anterior Horn",
                src: "c7LV"
            }, {
                label: "Putamen",
                src: "c7put"
            }, {
                label: "Sagittal Fissure",
                src: "c7SF"
            }, {
                label: "Temporal Lobes",
                src: "c7TL"
            }],
            mri: {
                src: "c7mri",
                labels: "c7mrilabels"
            },
            textLabels: "c7labels",
            perfusionAreas: ""
        }
    }, {
        path: "c8/",
        thumb: "c8thumb",
        view: {
            main: "c8brain",
            overlays: [{
                label: "Caudate Nucleus",
                src: "c8CN"
            }, {
                label: "Cingulate Gyrus",
                src: "c8CG"
            }, {
                label: "Cingulum",
                src: "c8cing"
            }, {
                label: "Claustrum",
                src: "c8claus"
            }, {
                label: "Corpus Callosum - Body",
                src: "c8CCb"
            }, {
                label: "Corpus Callosum - Rostrum",
                src: "c8CCr"
            }, {
                label: "Insula",
                src: "c8ins"
            }, {
                label: "Internal Capsule - Anterior Limb",
                src: "c8IC"
            }, {
                label: "Lateral Fissure",
                src: "c8LF"
            }, {
                label: "Lateral Ventricles",
                src: "c8LV"
            }, {
                label: "Nucleus Accumbens",
                src: "c8NA"
            }, {
                label: "Putamen",
                src: "c8put"
            }, {
                label: "Sagittal Fissure",
                src: "c8SF"
            }, {
                label: "Septum Pellucidum",
                src: "c8SP"
            }, {
                label: "Temporal Lobes",
                src: "c8TL"
            }],
            mri: {
                src: "c8mri",
                labels: "c8mrilabels"
            },
            textLabels: "c8labels",
            perfusionAreas: "c8perfusion"
        }
    }, {
        path: "c9/",
        thumb: "c9thumb",
        view: {
            main: "c9brain",
            overlays: [{
                label: "Caudate Nucleus",
                src: "c9CN"
            }, {
                label: "Cingulate Gyrus",
                src: "c9CG"
            }, {
                label: "Claustrum",
                src: "c9claus"
            }, {
                label: "Corpus Callosum - Body",
                src: "c9CCb"
            }, {
                label: "Corpus Callosum - Rostrum",
                src: "c9CCr"
            }, {
                label: "Infundibulum",
                src: "c9infun"
            }, {
                label: "Insula",
                src: "c9ins"
            }, {
                label: "Internal Capsule - Anterior Limb",
                src: "c9IC"
            }, {
                label: "Lateral Fissure",
                src: "c9LF"
            }, {
                label: "Lateral Ventricles",
                src: "c9LV"
            }, {
                label: "Nucleus Accumbens",
                src: "c9NA"
            }, {
                label: "Optic Chiasm",
                src: "c9OC"
            }, {
                label: "Putamen",
                src: "c9put"
            }, {
                label: "Sagittal Fissure",
                src: "c9SF"
            }, {
                label: "Septum Pellucidum",
                src: "c9SP"
            }, {
                label: "Temporal Lobes",
                src: "c9TL"
            }],
            mri: {
                src: "c9mri",
                labels: "c9mrilabels"
            },
            textLabels: "c9labels",
            perfusionAreas: ""
        }
    }, {
        path: "c10/",
        thumb: "c10thumb",
        view: {
            main: "c10brain",
            overlays: [{
                label: "Amygdala",
                src: "c10amyg"
            }, {
                label: "Anterior Commissure",
                src: "c10AC"
            }, {
                label: "Caudate Nucleus",
                src: "c10CN"
            }, {
                label: "Claustrum",
                src: "c10claus"
            }, {
                label: "Corpus Callosum",
                src: "c10CC"
            }, {
                label: "Fornix - Column",
                src: "c10FC"
            }, {
                label: "Globus Pallidus",
                src: "c10GP"
            }, {
                label: "Hypothalamus",
                src: "c10hypo"
            }, {
                label: "Infundibulum",
                src: "c10infun"
            }, {
                label: "Insula",
                src: "c10ins"
            }, {
                label: "Internal Capsule",
                src: "c10IC"
            }, {
                label: "Lateral Ventricles",
                src: "c10LV"
            }, {
                label: "Optic Tract",
                src: "c10OT"
            }, {
                label: "Putamen",
                src: "c10put"
            }, {
                label: "Septum Pellucidum",
                src: "c10SP"
            }, {
                label: "Third Ventricle",
                src: "c103V"
            }],
            mri: {
                src: "c10mri",
                labels: "c10mrilabels"
            },
            textLabels: "c10labels",
            perfusionAreas: ""
        }
    }, {
        path: "c11/",
        thumb: "c11thumb",
        view: {
            main: "c11brain",
            overlays: [{
                label: "Amygdala",
                src: "c11amyg"
            }, {
                label: "Caudate Nucleus",
                src: "c11CN"
            }, {
                label: "Cingulate Gyrus",
                src: "c11CG"
            }, {
                label: "Cingulum",
                src: "c11cing"
            }, {
                label: "Claustrum",
                src: "c11claus"
            }, {
                label: "Corpus Callosum",
                src: "c11CC"
            }, {
                label: "Fornix - Column",
                src: "c11FC"
            }, {
                label: "Globus Pallidus",
                src: "c11GP"
            }, {
                label: "Hypothalamus",
                src: "c11hypo"
            }, {
                label: "Insula",
                src: "c11ins"
            }, {
                label: "Internal Capsule",
                src: "c11IC"
            }, {
                label: "Lateral Fissure",
                src: "c11LF"
            }, {
                label: "Lateral Ventricles",
                src: "c11LV"
            }, {
                label: "Optic Tract",
                src: "c11OT"
            }, {
                label: "Putamen",
                src: "c11put"
            }, {
                label: "Sagittal Fissure",
                src: "c11SF"
            }, {
                label: "Septum Pellucidum",
                src: "c11SP"
            }, {
                label: "Third Ventricle",
                src: "c113V"
            }, {
                label: "Uncus",
                src: "c11unc"
            }],
            mri: {
                src: "c11mri",
                labels: "c11mrilabels"
            },
            textLabels: "c11labels",
            perfusionAreas: ""
        }
    }, {
        path: "c12/",
        thumb: "c12thumb",
        view: {
            main: "c12brain",
            overlays: [{
                label: "Caudate Nucleus",
                src: "c12CN"
            }, {
                label: "Cingulate Gyrus",
                src: "c12CG"
            }, {
                label: "Claustrum",
                src: "c12claus"
            }, {
                label: "Corpus Callosum",
                src: "c12CC"
            }, {
                label: "Fornix - Body",
                src: "c12FB"
            }, {
                label: "Globus Pallidus",
                src: "c12GP"
            }, {
                label: "Hippocampus",
                src: "c12hippo"
            }, {
                label: "Insula",
                src: "c12ins"
            }, {
                label: "Internal Capsule - Posterior Limb",
                src: "c12IC"
            }, {
                label: "Lateral Ventricles - Body",
                src: "c12LV"
            }, {
                label: "Lateral Ventricles - Inferior Horn",
                src: "c12LVih"
            }, {
                label: "Mammillary Bodies",
                src: "c12MB"
            }, {
                label: "Mammillothalamic Tract",
                src: "c12MT"
            }, {
                label: "Posterior Communicating Artery",
                src: "c12PCA"
            }, {
                label: "Putamen",
                src: "c12put"
            }, {
                label: "Septum Pellucidum",
                src: "c12SP"
            }, {
                label: "Thalamus",
                src: "c12thal"
            }, {
                label: "Third Ventricle",
                src: "c123V"
            }, {
                label: "Uncus",
                src: "c12unc"
            }],
            mri: {
                src: "c12mri",
                labels: "c12mrilabels"
            },
            textLabels: "c12labels",
            perfusionAreas: ""
        }
    }, {
        path: "c13/",
        thumb: "c13thumb",
        view: {
            main: "c13brain",
            overlays: [{
                label: "Caudate Nucleus",
                src: "c13CN"
            }, {
                label: "Cingulate Gyrus",
                src: "c13CG"
            }, {
                label: "Claustrum",
                src: "c13claus"
            }, {
                label: "Corpus Callosum",
                src: "c13CC"
            }, {
                label: "External Capsule",
                src: "c13EC"
            }, {
                label: "Fornix - Body",
                src: "c13FB"
            }, {
                label: "Globus Pallidus",
                src: "c13GP"
            }, {
                label: "Hippocampus",
                src: "c13hippo"
            }, {
                label: "Insula",
                src: "c13ins"
            }, {
                label: "Internal Capsule - Posterior Limb",
                src: "c13IC"
            }, {
                label: "Interthalamic Adhesion",
                src: "c13ITA"
            }, {
                label: "Lateral Ventricles - Body",
                src: "c13LV"
            }, {
                label: "Lateral Ventricles - Inferior Horn",
                src: "c13LVih"
            }, {
                label: "Mammillary Bodies",
                src: "c13MB"
            }, {
                label: "Mammillothalamic Tract",
                src: "c13MT"
            }, {
                label: "Putamen",
                src: "c13put"
            }, {
                label: "Septum Pellucidum",
                src: "c13SP"
            }, {
                label: "Thalamus",
                src: "c13thal"
            }, {
                label: "Third Ventricle",
                src: "c133V"
            }, {
                label: "Uncus",
                src: "c13unc"
            }],
            mri: {},
            textLabels: "c13labels",
            perfusionAreas: ""
        }
    }, {
        path: "c14/",
        thumb: "c14thumb",
        view: {
            main: "c14brain",
            overlays: [{
                label: "Basilar Pons",
                src: "c14BP"
            }, {
                label: "Caudate Nucleus",
                src: "c14CN"
            }, {
                label: "Claustrum",
                src: "c14claus"
            }, {
                label: "Corpus Callosum",
                src: "c14CC"
            }, {
                label: "Corticospinal Fibers",
                src: "c14CF"
            }, {
                label: "Crus Cerebri",
                src: "c14crus"
            }, {
                label: "External Capsule",
                src: "c14EC"
            }, {
                label: "Fornix - Body",
                src: "c14FB"
            }, {
                label: "Hippocampus",
                src: "c14hippo"
            }, {
                label: "Internal Capsule - Posterior Limb",
                src: "c14IC"
            }, {
                label: "Interpeduncular Fossa",
                src: "c14IF"
            }, {
                label: "Lateral Ventricles - Body",
                src: "c14LV"
            }, {
                label: "Lateral Ventricles - Inferior Horn",
                src: "c14LVih"
            }, {
                label: "Putamen",
                src: "c14put"
            }, {
                label: "Red Nucleus",
                src: "c14RN"
            }, {
                label: "Septum Pellucidum",
                src: "c14SP"
            }, {
                label: "Substantia Nigra",
                src: "c14SN"
            }, {
                label: "Subthalamic Nucleus",
                src: "c14subN"
            }, {
                label: "Thalamus",
                src: "c14thal"
            }, {
                label: "Third Ventricle",
                src: "c143V"
            }, {
                label: "Uncus",
                src: "c14unc"
            }],
            mri: {
                src: "c14mri",
                labels: "c14mrilabels"
            },
            textLabels: "c14labels",
            perfusionAreas: ""
        }
    }, {
        path: "c15/",
        thumb: "c15thumb",
        view: {
            main: "c15brain",
            overlays: [{
                label: "Basilar Pons",
                src: "c15BP"
            }, {
                label: "Caudate Nucleus",
                src: "c15CN"
            }, {
                label: "Claustrum",
                src: "c15claus"
            }, {
                label: "Corpus Callosum",
                src: "c15CC"
            }, {
                label: "Corticospinal Fibers",
                src: "c15CF"
            }, {
                label: "Crus Cerebri",
                src: "c15crus"
            }, {
                label: "External Capsule",
                src: "c15EC"
            }, {
                label: "Fornix - Body",
                src: "c15FB"
            }, {
                label: "Hippocampus",
                src: "c15hippo"
            }, {
                label: "Internal Capsule - Posterior Limb",
                src: "c15IC"
            }, {
                label: "Interpeduncular Fossa",
                src: "c15IF"
            }, {
                label: "Lateral Ventricles - Body",
                src: "c15LV"
            }, {
                label: "Lateral Ventricles - Inferior Horn",
                src: "c15LVih"
            }, {
                label: "Putamen",
                src: "c15put"
            }, {
                label: "Red Nucleus",
                src: "c15RN"
            }, {
                label: "Septum Pellucidum",
                src: "c15SP"
            }, {
                label: "Substantia Nigra",
                src: "c15SN"
            }, {
                label: "Thalamus",
                src: "c15thal"
            }, {
                label: "Third Ventricle",
                src: "c153V"
            }, {
                label: "Uncus",
                src: "c15unc"
            }],
            mri: {},
            textLabels: "c15labels",
            perfusionAreas: ""
        }
    }, {
        path: "c16/",
        thumb: "c16thumb",
        view: {
            main: "c16brain",
            overlays: [{
                label: "Basilar Pons",
                src: "c16BP"
            }, {
                label: "Caudate Nucleus - Body",
                src: "c16CN"
            }, {
                label: "Caudate Nucleus - Tail",
                src: "c16CNt"
            }, {
                label: "Cingulate Gyrus",
                src: "c16CG"
            }, {
                label: "Cingulum",
                src: "c16cing"
            }, {
                label: "Corpus Callosum",
                src: "c16CC"
            }, {
                label: "Fornix - Body",
                src: "c16FB"
            }, {
                label: "Hippocampus",
                src: "c16hippo"
            }, {
                label: "Insula",
                src: "c16ins"
            }, {
                label: "Lateral Geniculate Nucleus",
                src: "c16LGN"
            }, {
                label: "Lateral Ventricles - Body",
                src: "c16LV"
            }, {
                label: "Lateral Ventricles - Inferior Horn",
                src: "c16LVih"
            }, {
                label: "Medial Geniculate Nucleus",
                src: "c16MGN"
            }, {
                label: "Medulla",
                src: "c16med"
            }, {
                label: "Middle Cerebellar Peduncle",
                src: "c16MCP"
            }, {
                label: "Septum Pellucidum",
                src: "c16SP"
            }, {
                label: "Superior Cerebellar Peduncle - Decussation",
                src: "c16SCP"
            }, {
                label: "Thalamus",
                src: "c16thal"
            }, {
                label: "Third Ventricle",
                src: "c163V"
            }, {
                label: "Uncus",
                src: "c16unc"
            }],
            mri: {
                src: "c16mri",
                labels: "c16mrilabels"
            },
            textLabels: "c16labels",
            perfusionAreas: ""
        }
    }, {
        path: "c17/",
        thumb: "c17thumb",
        view: {
            main: "c17brain",
            overlays: [{
                label: "Basilar Pons",
                src: "c17BP"
            }, {
                label: "Caudate Nucleus - Body",
                src: "c17CN"
            }, {
                label: "Caudate Nucleus - Tail",
                src: "c17CNt"
            }, {
                label: "Cingulate Gyrus",
                src: "c17CG"
            }, {
                label: "Cingulum",
                src: "c17cing"
            }, {
                label: "Corpus Callosum",
                src: "c17CC"
            }, {
                label: "Fornix - Body",
                src: "c17FB"
            }, {
                label: "Hippocampus",
                src: "c17hippo"
            }, {
                label: "Lateral Geniculate Nucleus",
                src: "c17LGN"
            }, {
                label: "Lateral Ventricles - Body",
                src: "c17LV"
            }, {
                label: "Lateral Ventricles - Inferior Horn",
                src: "c17LVih"
            }, {
                label: "Medial Geniculate Nucleus",
                src: "c17MGN"
            }, {
                label: "Medulla",
                src: "c17med"
            }, {
                label: "Middle Cerebellar Peduncle",
                src: "c17MCP"
            }, {
                label: "Posterior Commissure",
                src: "c17PC"
            }, {
                label: "Septum Pellucidum",
                src: "c17SP"
            }, {
                label: "Superior Cerebellar Peduncle - Decussation",
                src: "c17SCP"
            }, {
                label: "Thalamus",
                src: "c17thal"
            }, {
                label: "Third Ventricle",
                src: "c173V"
            }, {
                label: "Uncus",
                src: "c17unc"
            }],
            mri: {
                src: "c17mri",
                labels: "c17mrilabels"
            },
            textLabels: "c17labels",
            perfusionAreas: ""
        }
    }, {
        path: "c18/",
        thumb: "c18thumb",
        view: {
            main: "c18brain",
            overlays: [{
                label: "Cingulate Gyrus",
                src: "c18CG"
            }, {
                label: "Cingulum",
                src: "c18cing"
            }, {
                label: "Corpus Callosum",
                src: "c18CC"
            }, {
                label: "Fornix - Crus",
                src: "c18FC"
            }, {
                label: "Fourth Ventricle",
                src: "c184V"
            }, {
                label: "Hippocampus",
                src: "c18hippo"
            }, {
                label: "Inferior Colliculus",
                src: "c18infC"
            }, {
                label: "Lateral Ventricles - Inferior Horn",
                src: "c18LVih"
            }, {
                label: "Lateral Ventricles - Posterior Horn",
                src: "c18LVph"
            }, {
                label: "Medulla",
                src: "c18med"
            }, {
                label: "Middle Cerebellar Peduncle",
                src: "c18MCP"
            }, {
                label: "Pineal Gland",
                src: "c18PG"
            }, {
                label: "Pons",
                src: "c18pons"
            }, {
                label: "Sagittal Fissure",
                src: "c18SF"
            }, {
                label: "Superior Cerebellar Peduncle",
                src: "c18SCP"
            }, {
                label: "Superior Colliculus",
                src: "c18supC"
            }, {
                label: "Thalamus - Pulvinar",
                src: "c18thal"
            }, {
                label: "Third Ventricle",
                src: "c183V"
            }],
            mri: {
                src: "c18mri",
                labels: "c18mrilabels"
            },
            textLabels: "c18labels",
            perfusionAreas: ""
        }
    }, {
        path: "c19/",
        thumb: "c19thumb",
        view: {
            main: "c19brain",
            overlays: [{
                label: "Cingulate Gyrus",
                src: "c19CG"
            }, {
                label: "Cingulum",
                src: "c19cing"
            }, {
                label: "Corpus Callosum",
                src: "c19CC"
            }, {
                label: "Fornix - Crus",
                src: "c19FC"
            }, {
                label: "Fourth Ventricle",
                src: "c194V"
            }, {
                label: "Hippocampus",
                src: "c19hippo"
            }, {
                label: "Lateral Ventricles - Inferior Horn",
                src: "c19LVih"
            }, {
                label: "Lateral Ventricles - Posterior Horn",
                src: "c19LVph"
            }, {
                label: "Medulla",
                src: "c19med"
            }, {
                label: "Middle Cerebellar Peduncle",
                src: "c19MCP"
            }, {
                label: "Sagittal Fissure",
                src: "c19SF"
            }, {
                label: "Superior Cerebellar Peduncle",
                src: "c19SCP"
            }],
            mri: {},
            textLabels: "c19labels",
            perfusionAreas: ""
        }
    }, {
        path: "c20/",
        thumb: "c20thumb",
        view: {
            main: "c20brain",
            overlays: [{
                label: "Cerebellar Tonsil",
                src: "c20CT"
            }, {
                label: "Dentate Nucleus",
                src: "c20DN"
            }, {
                label: "Fourth Ventricle",
                src: "c204V"
            }, {
                label: "Lateral Ventricles - Inferior Horn",
                src: "c20LVih"
            }, {
                label: "Lateral Ventricles - Posterior Horn",
                src: "c20LVph"
            }, {
                label: "Medulla",
                src: "c20med"
            }, {
                label: "Sagittal Fissure",
                src: "c20SF"
            }, {
                label: "Vermis - Inferior",
                src: "c20infV"
            }, {
                label: "Vermis - Superior",
                src: "c20supV"
            }],
            mri: {},
            textLabels: "c20labels",
            perfusionAreas: ""
        }
    }, {
        path: "c21/",
        thumb: "c21thumb",
        view: {
            main: "c21brain",
            overlays: [{
                label: "Cerebellar Tonsil",
                src: "c21CT"
            }, {
                label: "Dentate Nucleus",
                src: "c21DN"
            }, {
                label: "Fourth Ventricle",
                src: "c214V"
            }, {
                label: "Lateral Ventricles - Posterior Horn",
                src: "c21LVph"
            }, {
                label: "Medulla",
                src: "c21med"
            }, {
                label: "Sagittal Fissure",
                src: "c21SF"
            }, {
                label: "Vermis - Inferior",
                src: "c21infV"
            }, {
                label: "Vermis - Superior",
                src: "c21supV"
            }],
            mri: {},
            textLabels: "c21labels",
            perfusionAreas: ""
        }
    }, {
        path: "c22/",
        thumb: "c22thumb",
        view: {
            main: "c22brain",
            overlays: [{
                label: "Cerebellar Tonsil",
                src: "c22CT"
            }, {
                label: "Dentate Nucleus",
                src: "c22DN"
            }, {
                label: "Lateral Ventricles - Posterior Horn",
                src: "c22LVph"
            }, {
                label: "Medulla",
                src: "c22med"
            }, {
                label: "Sagittal Fissure",
                src: "c22SF"
            }, {
                label: "Vermis - Inferior",
                src: "c22infV"
            }, {
                label: "Vermis - Superior",
                src: "c22supV"
            }],
            mri: {},
            textLabels: "",
            perfusionAreas: ""
        }
    }, {
        path: "c23/",
        thumb: "c23thumb",
        view: {
            main: "c23brain",
            overlays: [{
                label: "Calcarine Fissure",
                src: "c23CF"
            }, {
                label: "Cerebellar Tonsil",
                src: "c23CT"
            }, {
                label: "Lateral Ventricles - Posterior Horn",
                src: "c23LVph"
            }, {
                label: "Sagittal Fissure",
                src: "c23SF"
            }, {
                label: "Vermis - Inferior",
                src: "c23infV"
            }, {
                label: "Vermis - Superior",
                src: "c23supV"
            }],
            mri: {},
            textLabels: "",
            perfusionAreas: ""
        }
    }, {
        path: "c24/",
        thumb: "c24thumb",
        view: {
            main: "c24brain",
            overlays: [{
                label: "Calcarine Fissure",
                src: "c24CF"
            }, {
                label: "Cerebellar Tonsil",
                src: "c24CT"
            }, {
                label: "Lateral Ventricles - Posterior Horn",
                src: "c24LVph"
            }, {
                label: "Sagittal Fissure",
                src: "c24SF"
            }, {
                label: "Vermis - Inferior",
                src: "c24infV"
            }, {
                label: "Vermis - Superior",
                src: "c24supV"
            }],
            mri: {
                src: "c24mri",
                labels: "c24mrilabels"
            },
            textLabels: "",
            perfusionAreas: ""
        }
    }];

    var path = "./images/coronal_slices/";
    return {
        data,
        path
    };
}();

export default SlicesInfo;