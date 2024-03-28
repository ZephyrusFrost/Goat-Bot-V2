const { getTime, drive } = global.utils;
if (!global.temp.welcomeEvent)
	global.temp.welcomeEvent = {};

module.exports = {
	config: {
		name: "welcome",
		version: "1.7",
		author: "NTKhang",
		category: "events"
	},

	langs: {
		vi: {
			session1: "sáng",
			session2: "trưa",
			session3: "chiều",
			session4: "tối",
			welcomeMessage: "Cảm ơn bạn đã mời tôi vào nhóm!\nPrefix bot: %1\nĐể xem danh sách lệnh hãy nhập: %1help",
			multiple1: "bạn",
			multiple2: "các bạn",
			defaultWelcomeMessage: "Xin chào {userName}.\nChào mừng bạn đến với {boxName}.\nChúc bạn có buổi {session} vui vẻ!"
		},
		en: {
			session1: "morning",
			session2: "noon",
			session3: "afternoon",
			session4: "evening",
			welcomeMessage: "🔴🟠🟡🟢\n━━━━━━━━━━━━━━━━━━━\n𝗬𝗔𝗭𝗨 𝗕𝗢𝗧 are connected successfully🟢\n𝗕𝗢𝗧 𝗖𝗥𝗘𝗔𝗧𝗢𝗥: KYLE BAIT-IT (HANDSOME)\n𝗙𝗔𝗖𝗘𝗕𝗢𝗢𝗞_𝗟𝗜𝗡𝗞: https://www.facebook.com/kyleyukaro\n𝗕𝗢𝗧 𝗚𝗥𝗘𝗘𝗧𝗜𝗡𝗚:『Thank you for inviting me to the group!』\nBot prefix: %1\nTo view the list of commands, please enter: %1help\n━━━━━━━━━━━━━━━━━━━",
			multiple1: "you",
			multiple2: "you guys",
			defaultWelcomeMessage: `Hello {userName}.\n━━━━━━━━━━━━━━━━━━━\nWelcome {multiple} to the chat group: {boxName}\n━━━━━━━━━━━━━━━━━━━\n\n『𝗡𝗢𝗧𝗜𝗖𝗘』\n🌟 𝗚𝗿𝗼𝘂𝗽 𝗥𝘂𝗹𝗲𝘀

𝗡𝗼 𝗦𝗽𝗮𝗺𝗺𝗶𝗻𝗴: Please refrain from excessive posting or sending repeated messages. Respect others' space in the group.

𝗕𝗲 𝗥𝗲𝘀𝗽𝗲𝗰𝘁𝗳𝘂𝗹: Treat everyone with kindness and consideration. Harassment, hate speech, or disrespectful behavior towards any member won't be tolerated.

𝗡𝗼 𝗜𝗹𝗹𝗲𝗴𝗮𝗹 𝗖𝗼𝗻𝘁𝗲𝗻𝘁: Any form of content that violates local, national, or international laws is strictly prohibited. This includes but is not limited to illegal downloads, explicit material, etc.

𝗙𝗼𝗹𝗹𝗼𝘄 𝗔𝗱𝗱𝗶𝘁𝗶𝗼𝗻𝗮𝗹 𝗚𝘂𝗶𝗱𝗲𝗹𝗶𝗻𝗲𝘀: Any rules or guidelines pinned in the group should be strictly adhered to. These may include specific guidelines for certain activities or interactions within the group.

𝗔𝗰𝘁𝗶𝘃𝗶𝘁𝘆 𝗥𝗲𝗾𝘂𝗶𝗿𝗲𝗺𝗲𝗻𝘁: Members are expected to maintain at least a minimal level of activity. Inactive members for an extended period without prior notice may be subject to removal.

𝗥𝗲𝘀𝗽𝗲𝗰𝘁 𝗔𝗱𝗺𝗶𝗻 𝗮𝗻𝗱 𝗠𝗲𝗺𝗯𝗲𝗿𝘀: Show respect to the group administrators and fellow members. Disrespect towards any group member, including admins, will not be tolerated.

𝗡𝗼 𝗦𝗲𝗲𝗻𝗲𝗿: Avoid using the "seen" feature to track or ignore messages intentionally.

𝗡𝗼 𝗢𝘃𝗲𝗿𝗮𝗰𝘁𝗶𝗻𝗴: Refrain from exaggerated or dramatic behavior that disrupts the harmony of the group.

𝗡𝗼 𝗥𝗼𝗹𝗲-𝗽𝗹𝗮𝘆𝗶𝗻𝗴: The group is meant for genuine conversation and interaction, not for role-playing activities.

𝗦𝘂𝗽𝗽𝗼𝗿𝘁 𝗘𝗮𝗰𝗵 𝗢𝘁𝗵𝗲𝗿: Feel free to share and promote your respective accounts for mutual support and encouragement among members.

𝖵i𝗈𝗅𝖺𝗍i𝗇𝗀 𝗍𝗁𝖾𝗌𝖾 𝗋𝗎𝗅𝖾𝗌 𝗆𝖺𝗒 𝗋𝖾𝗌𝗎𝗅𝗍 𝗂𝗇 𝗐𝖺𝗋𝗇𝗂𝗇𝗀𝗌 𝗈𝗋 𝗋𝖾𝗆𝗈𝗏𝖺𝗅 𝖿𝗋𝗈𝗆 𝗍𝗁𝖾 𝗀𝗋𝗈𝗎𝗉 𝗐𝖨𝗍𝗁𝗈𝗎𝗍 𝗉𝗋𝗈𝗋𝗇𝗈𝗍𝗂𝖼𝖾. 𝖫𝖾𝗍'𝗌 𝖼𝗋𝖾𝖺𝗍𝖾 𝖺 𝗐𝖾𝗅𝖼𝗈𝗆𝗂𝗇𝗀 𝖺𝗇𝖽 𝗋𝖾𝗌𝗉𝖾𝖼𝗍𝖿𝗎𝗅 𝖾𝗇𝗏𝗂𝗋𝗈𝗇𝗆𝖾𝗇𝗍 𝖿𝗈𝗋 𝖾𝗏𝖾𝗋𝗒𝗈𝗇𝖾. 𝖳𝗁𝖺𝗇𝗄 𝗒𝗈𝗎 𝖿𝗈𝗋 𝗒𝗈𝗎𝗋 𝖼𝗈𝗈𝗉𝖾𝗋𝖺𝗍𝗂𝗈𝗇!\n━━━━━━━━━━━━━━━━━━━\nHave a nice {session} 😊`
		}
	},

	onStart: async ({ threadsData, message, event, api, getLang }) => {
		if (event.logMessageType == "log:subscribe")
			return async function () {
				const hours = getTime("HH");
				const { threadID } = event;
				const { nickNameBot } = global.GoatBot.config;
				const prefix = global.utils.getPrefix(threadID);
				const dataAddedParticipants = event.logMessageData.addedParticipants;
				// if new member is bot
				if (dataAddedParticipants.some((item) => item.userFbId == api.getCurrentUserID())) {
					if (nickNameBot)
						api.changeNickname(nickNameBot, threadID, api.getCurrentUserID());
					return message.send(getLang("welcomeMessage", prefix));
				}
				// if new member:
				if (!global.temp.welcomeEvent[threadID])
					global.temp.welcomeEvent[threadID] = {
						joinTimeout: null,
						dataAddedParticipants: []
					};

				// push new member to array
				global.temp.welcomeEvent[threadID].dataAddedParticipants.push(...dataAddedParticipants);
				// if timeout is set, clear it
				clearTimeout(global.temp.welcomeEvent[threadID].joinTimeout);

				// set new timeout
				global.temp.welcomeEvent[threadID].joinTimeout = setTimeout(async function () {
					const threadData = await threadsData.get(threadID);
					if (threadData.settings.sendWelcomeMessage == false)
						return;
					const dataAddedParticipants = global.temp.welcomeEvent[threadID].dataAddedParticipants;
					const dataBanned = threadData.data.banned_ban || [];
					const threadName = threadData.threadName;
					const userName = [],
						mentions = [];
					let multiple = false;

					if (dataAddedParticipants.length > 1)
						multiple = true;

					for (const user of dataAddedParticipants) {
						if (dataBanned.some((item) => item.id == user.userFbId))
							continue;
						userName.push(user.fullName);
						mentions.push({
							tag: user.fullName,
							id: user.userFbId
						});
					}
					// {userName}:   name of new member
					// {multiple}:
					// {boxName}:    name of group
					// {threadName}: name of group
					// {session}:    session of day
					if (userName.length == 0) return;
					let { welcomeMessage = getLang("defaultWelcomeMessage") } =
						threadData.data;
					const form = {
						mentions: welcomeMessage.match(/\{userNameTag\}/g) ? mentions : null
					};
					welcomeMessage = welcomeMessage
						.replace(/\{userName\}|\{userNameTag\}/g, userName.join(", "))
						.replace(/\{boxName\}|\{threadName\}/g, threadName)
						.replace(
							/\{multiple\}/g,
							multiple ? getLang("multiple2") : getLang("multiple1")
						)
						.replace(
							/\{session\}/g,
							hours <= 10
								? getLang("session1")
								: hours <= 12
									? getLang("session2")
									: hours <= 18
										? getLang("session3")
										: getLang("session4")
						);

					form.body = welcomeMessage;

					if (threadData.data.welcomeAttachment) {
						const files = threadData.data.welcomeAttachment;
						const attachments = files.reduce((acc, file) => {
							acc.push(drive.getFile(file, "stream"));
							return acc;
						}, []);
						form.attachment = (await Promise.allSettled(attachments))
							.filter(({ status }) => status == "fulfilled")
							.map(({ value }) => value);
					}
					message.send(form);
					delete global.temp.welcomeEvent[threadID];
				}, 1500);
			};
	}
};
